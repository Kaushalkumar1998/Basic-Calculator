import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'index'
})
export class IndexPipe implements PipeTransform {

  transform(employees: any[], index: number): any {
    return employees[index];
  }

}
