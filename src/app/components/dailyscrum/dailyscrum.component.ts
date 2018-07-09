import { Component, OnInit } from '@angular/core';
import {EMPLOYEES} from '../employeedata/employeedata';

@Component({
  selector: 'app-dailyscrum',
  templateUrl: './dailyscrum.component.html',
  styleUrls: ['./dailyscrum.component.scss']
})
export class DailyscrumComponent implements OnInit {
  employees=EMPLOYEES;
  showadd=false;
  time:string;
  name:string;
  object={name: "", time: "", onTime: "", edit: false};

  dailyscrumlist = [
    {name: "", time: "", onTime: "", edit: false}
  ]

  constructor() { }

  ngOnInit() {
  }
addemployee(){
    this.object.name=this.name;
    this.object.time=this.time;
    this.object.onTime="DA";
    this.object.edit= false;
    this.dailyscrumlist.push(this.object);
console.log(this.dailyscrumlist);

}
delete(name){
    console.log(name);

    for (var j = 0; j < this.dailyscrumlist.length; j++) {

      if (this.dailyscrumlist[j]["name"] == name) {
        this.dailyscrumlist.splice(j, 1);
      }
    }


}
}
