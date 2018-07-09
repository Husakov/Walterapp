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
  editdailylist=false;
  newtime="";
  newname="";


  dailyscrumlist = [
    {name: "", time: "", onTime: "", edit: false}
  ]

  constructor() { }

  ngOnInit() {
  }
addemployee(){
  let object={name: "", time: "", onTime: "", edit: false};
    object.name=this.name;
    object.time=this.time;
    object.onTime="DA";
    object.edit= false;
  let hours = this.time.split(':');
  var h = hours[0];
  var m =hours[1];
  var hourss=+h;
  var minutes=+m;
  console.log(hourss,minutes);
  if((hourss==8 && minutes>45) || hourss>9) {
    object.onTime = "NE";
  }
    this.dailyscrumlist.push(object);
console.log(this.dailyscrumlist);



}
delete(name) {
  console.log(name);

  for (var j = 0; j < this.dailyscrumlist.length; j++) {

    if (this.dailyscrumlist[j]["name"] == name) {
      this.dailyscrumlist.splice(j, 1);
    }
  }}
edit(i){
    this.dailyscrumlist[i].name=this.newname;
    this.dailyscrumlist[i].time=this.newtime;

  let hours = this.newtime.split(':');
  var h = hours[0];
  var m =hours[1];
  var hourss=+h;
  var minutes=+m;
  console.log(hourss,minutes);
  if((hourss==8 && minutes>45) || hourss>9) {
    this.dailyscrumlist[i].onTime = "NE";
  }
  else{
    this.dailyscrumlist[i].onTime = "DA";
  }
  console.log(this.dailyscrumlist);
  this.editdailylist=false;


}


}

