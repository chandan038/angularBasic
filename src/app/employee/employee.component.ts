import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../models/employee.model';
import { NgForm } from  '@angular/forms';

declare var M : any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  selectedEmployee : Employee = new Employee();
  message = "Loading.........";
  p: number = 1;
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshList();
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.employeeService.selectedEmployee={
        id:"",
        username:"",
        email:"",
        phone:"",
        company:"",
        password:"",
      }
    }
  }

  onSubmit(form: NgForm){
    if((form.value.id =="") || (typeof form.value.id === 'undefined')){
      this.employeeService.postEmployee(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.refreshList();
        M.toast({html: 'Saved Successfully',classes:"round"})
      });
    }else{
      this.employeeService.putEmployee(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.refreshList();
        M.toast({html: 'Update Successfully',classes:"round"})
      });
    } 
  }

  refreshList(){
    this.employeeService.getEmployeeList().subscribe((res)=>{
      this.message = '';
      this.employeeService.employees=res as Employee[];
    });
  }

  onEdit(emp : Employee){
    this.selectedEmployee = emp;
  }

  onDelete(id: string,form: NgForm) {

    this.employeeService.deleteEmployee(id).subscribe((res)=>{
      this.refreshList();
      this.resetForm(form);
      M.toast({html: 'Delete Successfully',classes:"round"})
    });   
 }

}
