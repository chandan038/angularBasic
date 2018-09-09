import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from "./employee/employee.component";
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./auth.guard";
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';

const routes: Routes = [
  { path : '', component : LoginComponent },
  { path : 'login', component : LoginComponent },
  { path : 'employee', component : EmployeeComponent, canActivate:[AuthGuard] },
  { path :'addemployee',component: AddEmployeeComponent,canActivate:[AuthGuard]}
];

export const routing = RouterModule.forRoot(routes);