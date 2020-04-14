import { Component, OnInit, Input, Output, ViewChildren, QueryList } from '@angular/core';
import { Person } from '../models/Person';
import * as DIRECTORY  from '../service/person-mock-service';
import { FilterObject } from '../models/FilterObject';

@Component({
  selector: 'app-directory-view',
  templateUrl: './directory-view.component.html',
  styleUrls: ['../app.component.css']
})
export class DirectoryViewComponent implements OnInit {
  persons : Person[] = [];
  filterObject:FilterObject=new FilterObject();
  _storedPerson:Person;
  
  constructor() { }

  updatePerson(event:Person) {
    let person = this.persons.filter(p=>p['_id']==event._id);
    if(person.length==1){
      person[0]['_mobile'] = event._mobile;
    }
  }

  selectPerson(_person:Person){
    if(this._storedPerson && _person._id==this._storedPerson._id){
      window.localStorage.removeItem("person");
      this._storedPerson = null;
      return;
    }
    window.localStorage.setItem("person",JSON.stringify(_person));
    this._storedPerson = _person;
  }

  ngOnInit() {
    this.persons = DIRECTORY.default.sort((p1,p2)=>p1.name.localeCompare(p2.name));
    let data = window.localStorage.getItem('person');
    if(data){
      this._storedPerson = JSON.parse(data);
    }
  }

}
