import { Component, OnInit } from '@angular/core';
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
  renderedPerson:Person;

  constructor() { }

  ngOnInit() {
    this.persons = DIRECTORY.default.sort((p1,p2)=>p1.name.localeCompare(p2.name));
    this.renderedPerson = this.persons[0];
  }

}
