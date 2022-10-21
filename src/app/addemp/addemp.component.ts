import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  empcode=""
  name=""
  designation=""
  salary=""
  dob=""
  email=""
  phone=""
  company=""
  dateofjoining=""

  status:boolean=false

  readValues=()=>{
    let data={
      "empcode":this.empcode,
      "name":this.name,
      "designation":this.designation,
      "salary":this.salary,
      "dob":this.dob,
      "email":this.email,
      "phone":this.phone,
      "company":this.company,
      "dateofjoining":this.dateofjoining
    }
    console.log(data)
    this.myapi.addEmp(data).subscribe(
      (resp)=>{
        console.log(resp)
        
      }
    )

    this.empcode=""
    this.name=""
    this.designation=""
    this.salary=""
    this.dob=""
    this.email=""
    this.phone=""
    this.company=""
    this.dateofjoining=""

    this.status=true
  }

  ngOnInit(): void {
  }

}
