import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  constructor() { }

  empcode=""
  name=""
  designation=""
  salary=""
  dob=""
  email=""
  phone=""
  company=""
  dateofjoining=""

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
  }

  ngOnInit(): void {
  }

}
