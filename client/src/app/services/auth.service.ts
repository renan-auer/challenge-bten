import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private autenticado: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService:  CookieService
  ) { }

  login(name: String, password: String) {
    return this.http.post(environment.apiUrl + '/api/auth', { name, password }, { headers: { 'Content-Type': 'application/json' } })
  }

  logout() {
    this.cookieService.delete('auth');
    this.router.navigate(['/login'])
  }

  getToken() {
    return this.cookieService.get('auth');
  }


  isAutenticado() {
    let token = this.getToken()
    return token && token.length > 15
  }

  getUser() {
    try {
      const base64Url = this.getToken() ?? ""
      const base64 = base64Url.split(".")[1];
      if (base64) {
        const userEncoded = decodeURIComponent(atob(base64).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const user = JSON.parse(userEncoded)
        return user;
      }
    } catch (e) {
      console.log(e)
    }

    return null;
  }

  autentica(token: string) {
    const a =this.cookieService.set('auth', token)
    console.log(a)
    console.log(this.cookieService.get('auth'))
    this.autenticado = true
  }

}
