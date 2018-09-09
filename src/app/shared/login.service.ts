import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Login } from '../models/login.model';

interface mydata{
  success:boolean,
  message:string,
  token:string
}
interface islogin{
  success:boolean,
  token:string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login : Login;
  readonly baseUrl = 'http://localhost/backend/index.php/api/auth/login/';
  loggedingStatus = false;
  constructor(private http:HttpClient) { }

  setLoggedin(value:boolean){
    this.loggedingStatus = value;
    localStorage.setItem('logginStatus','true');
  }

  get getLogin(){
    return this.loggedingStatus;
  }

  postLogin(login : Login){
    return  this.http.post<mydata>(this.baseUrl,login);
  }

  getLogout(){
    return  this.http.get<islogin>(this.baseUrl);
  }
}
