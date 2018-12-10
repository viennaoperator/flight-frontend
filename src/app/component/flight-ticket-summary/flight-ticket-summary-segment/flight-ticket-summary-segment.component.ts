import { Component, OnInit, Input } from '@angular/core';
import { FlightSegment } from '../../../model/flight.segment';

@Component({
  selector: 'app-flight-ticket-summary-segment',
  templateUrl: './flight-ticket-summary-segment.component.html',
  styleUrls: ['./flight-ticket-summary-segment.component.css']
})
export class FlightTicketSummarySegmentComponent implements OnInit {

  @Input() flightSegment: FlightSegment;

  constructor() { }

  ngOnInit() {
  }

}
