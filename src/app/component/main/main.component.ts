import { Component, OnInit } from '@angular/core';
import { FlightSearchService } from '../../service/flight-search/flight-search.service';
import { FlightSearchServiceResponse } from '../../service/flight-search/response-model/flight-search-service.response';
import { Guid } from 'guid-typescript';
import { FlightTicket } from '../../model/flight.ticket';
import { FlightSegment } from '../../model/flight.segment';
import { Leg } from '../../service/flight-search/response-model/leg';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  guid: Guid;
  flightTickets: FlightTicket[];
  currency: string;

  constructor(private flightSearchService: FlightSearchService) { }

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
          const flightSegment = new FlightSegment();
          const segment = flightSearchServiceResponse.Segments[segmentIndex];
          flightSegment.routeDuration = segment.Duration;
          const firstLegOfSegment = segment.LegIndexes[0];
          const departureLeg = flightSearchServiceResponse.Legs[firstLegOfSegment];
          const lastLegOfSegment = segment.LegIndexes[segment.LegIndexes.length - 1]; // segmentIndex
          const arrivalLeg = flightSearchServiceResponse.Legs[lastLegOfSegment];
          this.saveDepartureInfos(flightSegment, departureLeg);
          this.saveArrivalInfos(flightSegment, arrivalLeg);
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

  saveDepartureInfos(flightSegment: FlightSegment, departureLeg: Leg) {
    flightSegment.originIata = this.getAirportCode(departureLeg.Origin);
    flightSegment.originTime = departureLeg.Departure;
    flightSegment.originPlace = this.getAirportPlace(departureLeg.Origin);
    flightSegment.carriers = this.addCarrier(departureLeg.AirlineName, flightSegment.carriers);
  }

  saveArrivalInfos(flightSegment: FlightSegment, arrivalLeg: Leg) {
    flightSegment.destinationIata = this.getAirportCode(arrivalLeg.Destination);
    flightSegment.destinationTime = arrivalLeg.Arrival;
    flightSegment.destinationPlace = this.getAirportPlace(arrivalLeg.Destination);
    flightSegment.carriers = this.addCarrier(arrivalLeg.AirlineName, flightSegment.carriers);
  }

  addCarrier(carrier: string, carriers: string[]): string[] {
    if (!carriers) {
      carriers = new Array();
    }
    if (!carriers.find(x => x === carrier)) {
      carriers.push(carrier);
    }
    return carriers;
  }

  getAirportCode(airport: string) {
    const startOfAirportCode = airport.indexOf('(') + 1;
    const endOfAirportCode = airport.indexOf(')');
    return airport.substring(startOfAirportCode, endOfAirportCode);
  }

  getAirportPlace(airport: string) {
    const endOfAirportCode = airport.indexOf(',');
    return airport.substring(0, endOfAirportCode);
  }
}
