import { Component, OnInit } from '@angular/core';
import { FlightSearchService } from '../../service/flight-search/flight-search.service';
import { FlightSearchServiceResponse } from '../../service/flight-search/response-model/flight-search-service.response';
import { Guid } from 'guid-typescript';
import { FlightTicket } from '../../model/flight.ticket';
import { FlightSegment } from '../../model/flight.segment';
import { Leg } from '../../service/flight-search/response-model/leg';
import { AirportService } from 'src/app/service/airport/airport.service.service';
import { CarrierService } from 'src/app/service/carrier/carrier.service';
import { FlightSegmentService } from 'src/app/service/flight-segment/flight-segment.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  guid: Guid;
  flightTickets: FlightTicket[];
  currency: string;

  constructor(private flightSearchService: FlightSearchService,
              private flightSegmentService: FlightSegmentService) { }

  ngOnInit() {
    this.currency = 'HUF';
    this.guid = Guid.create();
    this.getFlightSearchResult();
  }

  getFlightSearchResult() {
    this.flightSearchService.getSearchResult(this.guid)
    .subscribe(x => this.transform(x));
  }

  transform(flightSearchServiceResponse: FlightSearchServiceResponse) {
    const flightTickets: FlightTicket[] = new Array();
      flightSearchServiceResponse.Flights.forEach(flight => {
        const flightTicket = new FlightTicket();
        flightTicket.flightSegments = new Array();
        flight.SegmentIndexes.forEach(segmentIndex => {
          const segment = flightSearchServiceResponse.Segments[segmentIndex];
          const firstLegOfSegment = segment.LegIndexes[0];
          const departureLeg = flightSearchServiceResponse.Legs[firstLegOfSegment];
          const lastLegOfSegment = segment.LegIndexes[segment.LegIndexes.length - 1]; // segmentIndex
          const arrivalLeg = flightSearchServiceResponse.Legs[lastLegOfSegment];
          const flightSegment = this.flightSegmentService.createFlightSegment(segment.Duration, departureLeg, arrivalLeg);
          flightTicket.flightSegments.push(flightSegment);
        });
      flightTickets.push(flightTicket);
    });
    flightSearchServiceResponse.Offers.forEach(x => {
      const flight = flightTickets[x.FlightIndex];
      flight.deepLink = x.Deeplink;
      flight.currency = this.currency;
      flight.price = Number(x.Price).toFixed(3);
    });
    this.flightTickets = flightTickets;
  }
}
