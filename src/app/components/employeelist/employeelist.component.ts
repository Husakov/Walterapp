import { Component, OnInit} from '@angular/core';

import {EMPLOYEES} from '../employeedata/employeedata';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employees = EMPLOYEES;
  showedit=false;
  showdodaj=false;
  name="";
  editname="";


  ngOnInit() {

  }

  deleteemployee(name) {
    console.log(name);

    for (var j = 0; j < this.employees.length; j++) {

      if (this.employees[j]["name"] == name) {
        this.employees.splice(j, 1);
      }
    }
  }
  edit(i){
    let object={id:i+1, name: "", edit: false};
    object.name=this.editname;
    object.edit= false;
    this.employees[i].name=object.name;
    this.employees[i].edit=false;
    this.showedit=!this.showedit;

  }
  showothers(s) {
let i=0;
    this.employees.forEach(item => {
      if (item.id != this.employees[s].id) {
        this.employees[i].edit = false;
        console.log(this.employees[i].edit);
      }
      i++;
    });
  }

  addemployee(){
    let object={id:this.employees.length+1, name: "", edit: false};
    object.name=this.name;
    object.edit= false;
    this.employees.push(object);

  }
}
