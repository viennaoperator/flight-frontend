import { Component, OnInit, Input } from '@angular/core';
import { FlightTicket } from '../../model/flight.ticket';
import { FlightSegment } from '../../model/flight.segment';

@Component({
  selector: 'app-flight-tickets',
  templateUrl: './flight-tickets.component.html',
  styleUrls: ['./flight-tickets.component.css']
})
export class FlightTicketsComponent implements OnInit {

  @Input() flightTickets: FlightTicket[];

  constructor() { }

  ngOnInit() {
    this.setupTestData();
  }

  setupTestData() {
    this.flightTickets = new Array();
    const flightTicket = new FlightTicket();
    flightTicket.currency = 'HUF';
    flightTicket.price = '220.437';
    flightTicket.deepLink = 'http://www.momondo.com';
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
    flightTicket.flightSegments = flightSegments;
    this.flightTickets.push(flightTicket);
  }

}
