import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from 'src/app/employeeModel';
import { EmpserviceService } from 'src/app/service/empservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  allEmployee: any
  updateId = 0;
  constructor(private servLayer:EmpserviceService, private router: Router) { }

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
  deleteEmp(id:number){
    this.servLayer.deleteEmp(id).subscribe();
  }
  edit(Id:number){
    this.router.navigate(['updateEmp', Id])
  }

}
