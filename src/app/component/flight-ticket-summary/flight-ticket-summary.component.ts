import { Component, OnInit, Input } from '@angular/core';
import { FlightSegment } from '../../model/flight.segment';
import { FlightTicket } from '../../model/flight.ticket';

@Component({
  selector: 'app-flight-ticket-summary',
  templateUrl: './flight-ticket-summary.component.html',
  styleUrls: ['./flight-ticket-summary.component.css']
})
export class FlightTicketSummaryComponent implements OnInit {

  @Input() flightTicket: FlightTicket;

  constructor() { }

  ngOnInit() {
  }

}
