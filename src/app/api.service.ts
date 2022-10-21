import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewEmp=()=>{
    return this.http.get("http://localhost:8080/viewemp")
  }

  addEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/addemp",data)
  }

  deleteEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteemp",data)
  }
}
