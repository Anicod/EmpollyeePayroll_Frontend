import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../employeeModel';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  baseUrl:string = "http://localhost:8080/request/list"
  constructor(private http: HttpClient) { }
  // getService(url:string, httpoption:any){
  //   return this.http.get(url, httpoption)
  // }
  // getEmpList(){
  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
        
  //     })
  //   }
  //   return this.getService(this.baseUrl, header);
  // }
  getEmpList(){
    return this.http.get(this.baseUrl);
  }
  insertEmployee(employee:any){
    return this.http.post("http://localhost:8080/request/postbydto", employee);
  }
  deleteEmp(Id:number): Observable<any>{
    return this.http.delete("http://localhost:8080/request/deletebyidPath/"+Id);
  }
  updateEmp(Id:number, employee:any){
    return this.http.put("http://localhost:8080/request/updatebydto/"+Id, employee);
  }
  getEmpById(Id:number){
    return this.http.get("http://localhost:8080/request/getbyiddtoPath/"+Id);
  }

  }
