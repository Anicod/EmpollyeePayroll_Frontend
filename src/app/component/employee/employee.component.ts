import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/employeeModel';
import { EmpserviceService } from 'src/app/service/empservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  allEmployee: any
  num = 0;
  constructor(private servLayer:EmpserviceService) { }

  ngOnInit(): void {
    this.getListEmp();
  }
  getListEmp(){
    this.servLayer.getEmpList().subscribe(res=>{
      console.log(res)
      this.allEmployee = res
    }
    )
  }
  fun(){
    console.log(this.allEmployee[this.num].Id)
    this.servLayer.deleteEmp(this.allEmployee[this.num].Id).subscribe();
    this.getListEmp();
    this.num = this.num+1;
  }
}
