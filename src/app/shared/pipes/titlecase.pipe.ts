import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
    return value;
  }

}
