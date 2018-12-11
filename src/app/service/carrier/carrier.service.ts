import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrierService {

  constructor() { }

  addCarrier(carrier: string, carriers: string[]): string[] {
    if (!carriers) {
      carriers = new Array();
    }
    if(carrier === null || carrier === undefined) {
      return carriers;
    }
    if (!carriers.find(x => x === carrier)) {
      carriers.push(carrier);
    }
    return carriers;
  }
}
