import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeService } from './shared/employee.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { LoginService } from './shared/login.service';
import { HeaderComponent } from './header/header.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { NgxPaginationModule } from 'ngx-pagination';
 
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent,
    HeaderComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    routing
  ],
  providers: [EmployeeService,AuthGuard,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
