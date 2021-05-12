import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
  }
  login(name: String, password: String){
    return this.http.post(environment.apiUrl + '/api/auth', {name, password}, {headers:{'Content-Type':'application/json'}})
  }
}
