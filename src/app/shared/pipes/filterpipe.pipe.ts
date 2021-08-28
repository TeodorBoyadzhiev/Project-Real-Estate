import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(apartments: any, searchInput: any): any {

    if (searchInput === undefined) { return apartments };

    return apartments.filter(function (apartment: any) {
      return apartment.description.toLowerCase().includes(searchInput.toLowerCase());
    });
  }

}
