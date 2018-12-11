import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'transformMinutesToHours'
})
export class TransformMinutesToHours implements PipeTransform {
  transform(value: number): string {
    if (!value) {
      return '';
    }
    if (value > 0 && value / 60 < 1) {
       return value + 'm';
     } else {
       const hours = Math.floor(value / 60) + 'h';
       const minutes = value % 60 + 'm';
       return hours + minutes;
     }
  }
}
