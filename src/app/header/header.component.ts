import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private loginService: LoginService) { }

  ngOnInit() {
  }
  logout(){
    this.loginService.getLogout();
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    
  }
}
