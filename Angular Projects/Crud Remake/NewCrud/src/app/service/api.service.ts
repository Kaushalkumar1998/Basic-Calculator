import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  public postEmployeeData(user: any) {
    return this.http.post(`${this.baseUrl}create-employee`, user);
  }

  public getEmployeeData() {
    return this.http.get(`${this.baseUrl}all-employee-data`);
  }
  public updateEmployeeData(user: any) {
    return this.http.put(`${this.baseUrl}update-employee`, user);
  }
  public deleteEmployee(id: number) {
    return this.http.delete(`${this.baseUrl}delete-employee/${id}`);
  }
  public paginatedEmployeeData(paginatedReq: any) {
    return this.http.post(`${this.baseUrl}paginated-data`, paginatedReq);
  }

}
