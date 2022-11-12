import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModel } from 'src/app/employeeModel';
import { EmpserviceService } from 'src/app/service/empservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  employee: EmployeeModel = new EmployeeModel("",new Date,"", "","","", 0, "","");
  userName = ""
  nameErr = ""
  constructor(private servLayer:EmpserviceService, private router: Router) { }
  ngOnInit(): void {
  }
  getVal(value: String) {
    console.log(value);
    this.employee.department = value.toString();
  }
  addEmployeeData() {
    console.log(this.employee);
    this.servLayer.insertEmployee(this.employee).subscribe((data:any) => {
      this.router.navigate(["/"])
    })
  }
}
