import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Employee } from '../models/employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee:Employee;
  employees:Employee[];

  readonly baseUrl = 'http://localhost/backend/index.php/api/employee/users/';

  constructor(private http: HttpClient) { }
  
  getEmployeeList(){
    return  this.http.get(this.baseUrl);
  }
  postEmployee(emp : Employee){
    return  this.http.post(this.baseUrl,emp);
  }
  putEmployee(emp : Employee){
    return  this.http.put(this.baseUrl +emp.id,emp);
  }
  deleteEmployee(id: string){
    return  this.http.delete(this.baseUrl +id);
  }



}
