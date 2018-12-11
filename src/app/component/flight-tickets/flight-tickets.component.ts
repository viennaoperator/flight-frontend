import { Component, OnInit, Input } from '@angular/core';
import { FlightTicket } from '../../model/flight.ticket';

@Component({
  selector: 'app-flight-tickets',
  templateUrl: './flight-tickets.component.html',
  styleUrls: ['./flight-tickets.component.css']
})
export class FlightTicketsComponent implements OnInit {

  @Input() flightTickets: FlightTicket[];

  constructor() { }

  ngOnInit() {
  }
}
