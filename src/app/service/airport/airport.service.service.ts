import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor() { }

  getAirportCode(airport: string): string {
    if(airport === undefined || airport === null) {
      return '';
    }
    const startOfAirportCode = airport.indexOf('(') + 1;
    const endOfAirportCode = airport.indexOf(')');
    return airport.substring(startOfAirportCode, endOfAirportCode);
  }

  getAirportPlace(airport: string): string {
    if(airport === undefined || airport === null) {
      return '';
    }
    const endOfAirportCode = airport.indexOf(',');
    if(endOfAirportCode === -1) return airport;
    return airport.substring(0, endOfAirportCode);
  }
}
