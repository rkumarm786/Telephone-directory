import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Person } from '../models/Person';

@Component({
  selector: 'app-directory-child-view',
  templateUrl: './directory-child-view.component.html',
})
export class DirectoryChildViewComponent implements OnChanges {
  @Input()
  private renderedPerson: Person;

  @Output()
  updatePersonEvent= new EventEmitter();;

  editMode:boolean;
  _person:Person;

  objectKeys = Object.keys;

  updatePerson(){
    if(this.editMode){
      this.updatePersonEvent.next(this._person);
    }
    this.editMode = !this.editMode;
  }

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    this._person = JSON.parse(JSON.stringify(changes.renderedPerson.currentValue));
  }
}
