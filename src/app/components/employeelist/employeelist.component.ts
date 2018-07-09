import { Component, OnInit} from '@angular/core';

import {EMPLOYEES} from '../employeedata/employeedata';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employees = EMPLOYEES;


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
}
