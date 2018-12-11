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
     const hours = this.fillOutNumbers(date.getHours());
     const minutes = this.fillOutNumbers(date.getMinutes());
     return hours + ':' + minutes;
  }

  fillOutNumbers(number: number): string {
    if(number === 0) {
      return '00';
    }
    if(number < 10) {
      return '0' + number;
    }
    return String(number);
  }
}
