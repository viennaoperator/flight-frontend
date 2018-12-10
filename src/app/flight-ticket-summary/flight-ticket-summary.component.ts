import { Component, OnInit, Input } from '@angular/core';
import { FlightSegment } from '../model/flight.segment';
import { FlightTicket } from '../model/flight.ticket';

@Component({
  selector: 'app-flight-ticket-summary',
  templateUrl: './flight-ticket-summary.component.html',
  styleUrls: ['./flight-ticket-summary.component.css']
})
export class FlightTicketSummaryComponent implements OnInit {

  @Input() flightTicket: FlightTicket;

  constructor() { }

  ngOnInit() {
    this.flightTicket = new FlightTicket();
    this.flightTicket.currency = 'HUF';
    this.flightTicket.price = '220.437';
    const flightSegments = new Array();
    const flightSegment1 = new FlightSegment();
    flightSegment1.carriers = ['easyJet'];
    flightSegment1.destinationIata = 'CPH';
    flightSegment1.destinationPlace = 'Copenhagen';
    flightSegment1.destinationTime = '12:25';
    flightSegment1.originIata = 'SFO';
    flightSegment1.originPlace = 'San Francisco';
    flightSegment1.originTime = '15:50';
    flightSegments.push(flightSegment1);
    const flightSegment2 = new FlightSegment();
    flightSegment2.carriers = ['SAS'];
    flightSegment2.destinationIata = 'SFO';
    flightSegment2.destinationPlace = 'San Francisco';
    flightSegment2.destinationTime = '08:15';
    flightSegment2.originIata = 'SFO';
    flightSegment2.originPlace = 'Copenhagen';
    flightSegment2.originTime = '18:45';
    flightSegments.push(flightSegment2);
    this.flightTicket.flightSegments = flightSegments;
  }

}
