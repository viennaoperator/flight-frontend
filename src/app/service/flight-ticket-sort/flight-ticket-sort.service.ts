import { Injectable } from '@angular/core';
import { FlightTicket } from 'src/app/model/flight.ticket';

@Injectable({
  providedIn: 'root'
})
export class FlightTicketSortService {

  constructor() { }

  sort(flightTickets: FlightTicket[]): FlightTicket[]{
    return flightTickets.sort((n1, n2) => Number(n1.price) - Number(n2.price))
  }
}
