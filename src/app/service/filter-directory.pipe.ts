import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/Person';
import { FilterObject } from '../models/FilterObject';

@Pipe({ name: 'filter' ,pure:false})
export class FilterDirectory implements PipeTransform {
  transform(persons: Person[],filterObject:FilterObject) {
    if(!filterObject.name && !filterObject.mobile && filterObject.mobile!=0){
      return persons;
    }
    return persons.filter(person => (((filterObject.mobile || filterObject.mobile==0) ? person.mobile.toString().indexOf(filterObject.mobile.toString())>=0 : true) && (filterObject.name ? person.name.toLowerCase().indexOf(filterObject.name.toLowerCase())>=0 :true)));
  }
}