import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees: any, searchterm: any): any {
    //prvo provjerimo da li je undefind search term
    if (searchterm === undefined) return employees;
    //sada tek vracamo updatovan array
    return employees.filter(function (employee) {
      return employee.name.toLowerCase().includes(searchterm.toLowerCase());

    })
  }

}
