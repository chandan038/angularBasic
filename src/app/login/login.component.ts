import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../models/login.model';
import { LoginService } from '../shared/login.service';
import { Route, Router } from '@angular/router';

declare var M : any;
declare var res :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : Login = new Login();

  constructor(private loginService : LoginService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if((form.value.id =="") || (typeof form.value.id === 'undefined')){
      this.loginService.postLogin(form.value).subscribe((res)=>{
        if(res.success){
          this.router.navigate(['employee']);
          this.loginService.setLoggedin(true);
          localStorage.setItem('token',res.token);
        }
       M.toast({html: 'Login Successfully',classes:"round"})
      });
    } 
  }

}
