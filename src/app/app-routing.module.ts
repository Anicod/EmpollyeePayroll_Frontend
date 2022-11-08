import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './component/adduser/adduser.component';
import { EmployeeComponent } from './component/employee/employee.component';

const routes: Routes = [
  {path: '', component: EmployeeComponent},
  {path: 'adduser', component: AdduserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
