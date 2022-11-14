import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  Id: any = this.route.snapshot.paramMap.get("Id");
  constructor(private servLayer:EmpserviceService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.servLayer.getEmpById(this.Id).subscribe((res:any) =>{
      console.log(res)
      this.employee = res
    }
    )
  }
  getVal(value: String) {
    console.log(value);
    this.employee.department = value.toString();
  }
  addEmployeeData() {
    alert("added successfully")
    console.log(this.employee);
    this.servLayer.insertEmployee(this.employee).subscribe((data:any) => {
      this.router.navigate(["/"])
    })
  }
  update(){
   this.servLayer.updateEmp(this.Id, this.employee).subscribe((res:any) =>{
    this.router.navigate(["/"])
   }
   )
  }
}
