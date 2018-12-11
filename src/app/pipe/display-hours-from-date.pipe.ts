import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'displayHours'
})
export class DisplayHoursFromDate implements PipeTransform {
  transform(value: Date): string {
    if (!value) {
      return '';
    }
     const date = new Date(value);
     const hours = date.getHours();
     const minutes = date.getMinutes();
     if (hours === 0) {
       return '00:' + minutes;
     }
     return hours + ':' + minutes;
  }
}
