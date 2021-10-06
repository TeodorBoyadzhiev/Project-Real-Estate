import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(apartments: any[], searchInput: string, propName: string): any {

    const resultArray = [];

    if (apartments.length === 0 || searchInput === '' || propName === '') {
      return apartments;
    }

    for (const item of apartments) {
      if (item[propName] === searchInput) {
        resultArray.push(item);
      }
    }

    return resultArray;

  }

}
