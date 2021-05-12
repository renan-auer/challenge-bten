import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  
  getDataCharts(){
    return this.http.get(environment.apiUrl + '/api/dashboard/cards', {headers:{'Content-Type':'application/json'}})
  }

  getSalesGraph(){
    return this.http.get(environment.apiUrl + '/api/dashboard/sales-graph', {headers:{'Content-Type':'application/json'}})
  }

  getClientGraph(){
    return this.http.get(environment.apiUrl + '/api/dashboard/client-graph', {headers:{'Content-Type':'application/json'}})
  }

}
