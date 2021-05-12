import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
  }
  save(user: any){
    return this.http.post(environment.apiUrl + '/api/user', user, {headers:{'Content-Type':'application/json'}})
  }

  update(id: number, user: any){
    return this.http.put(environment.apiUrl + '/api/user/' + id, user, {headers:{'Content-Type':'application/json'}})
  }

  getUserById(id: number){
    return this.http.get(environment.apiUrl + '/api/user/' + id, {headers:{'Content-Type':'application/json'}})
  }

  getUsers(){
    return this.http.get(environment.apiUrl + '/api/user/', {headers:{'Content-Type':'application/json'}})
  }

  delete(id: number){
    return this.http.delete(environment.apiUrl + '/api/user/' + id, {headers:{'Content-Type':'application/json'}})
  }
}
