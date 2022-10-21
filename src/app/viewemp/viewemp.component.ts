import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent implements OnInit {

  constructor(private myapi:ApiService) { 

    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewEmp().subscribe(
      (data)=>{
        this.empData=data
      }
    )
  }

  deleteEmp=(id:any)=>{
    let data={"id":id}
    this.myapi.deleteEmp(data).subscribe(
      (resp)=>{
        alert("DELETED")
      }
      
      
    )
  }

  empData:any=[]

  ngOnInit(): void {
  }

}
