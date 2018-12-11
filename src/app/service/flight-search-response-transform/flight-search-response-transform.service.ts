import { Injectable } from '@angular/core';
import { FlightTicket } from 'src/app/model/flight.ticket';
import { FlightSearchServiceResponse } from '../flight-search/response-model/flight-search-service.response';
import { FlightSegmentService } from '../flight-segment/flight-segment.service';
import { Leg } from '../flight-search/response-model/leg';
import { Segment } from '../flight-search/response-model/segment';
import { FlightTicketSortService } from '../flight-ticket-sort/flight-ticket-sort.service';
import { Flight } from '../flight-search/response-model/flight';
import { Offer } from '../flight-search/response-model/offer';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchResponseTransformService {

  currency = 'HUF';
  priceRoundDepth  = 3;
  flights: Flight[];
  legs: Leg[];
  segments: Segment[];
  offers: Offer[];
  flightTickets: FlightTicket[];

  constructor(private flightSegmentService: FlightSegmentService,
             private flightTicketSortService: FlightTicketSortService) {
               this.flights = new Array();
               this.legs = new Array();
               this.segments = new Array();
               this.offers = new Array();
            }

  addResult(flightSearchServiceResponse: FlightSearchServiceResponse) {
    flightSearchServiceResponse.Flights.forEach(x => {
      this.flights.push(x);
    });
    flightSearchServiceResponse.Legs.forEach(x => {
      this.legs.push(x);
    });
    flightSearchServiceResponse.Segments.forEach(x => {
      this.segments.push(x);
    });
    flightSearchServiceResponse.Offers.forEach(x => {
      this.offers.push(x);
    });
  }

  transformResponseIntoFlightTickets(): FlightTicket[] {
    this.flightTickets = new Array();
    this.flights.forEach(flight => {
        const flightTicket = new FlightTicket();
        flightTicket.flightSegments = new Array();
        flight.SegmentIndexes.forEach(segmentIndex => {
          const segment =  this.segments[segmentIndex];
          const departureLeg = this.getDepartueLeg(segment,  this.legs);
          const arrivalLeg = this.getArrivalLeg(segment,  this.legs);
          const flightSegment = this.flightSegmentService.createFlightSegment(segment.Duration, departureLeg, arrivalLeg);
          flightTicket.flightSegments.push(flightSegment);
        });
      this.flightTickets.push(flightTicket);
    });
    this.offers.forEach(x => {
      const flight = this.flightTickets[x.FlightIndex];
      flight.deepLink = x.Deeplink;
      flight.currency = this.currency;
      flight.price = Number(x.Price).toFixed(this.priceRoundDepth);
    });
    this.flightTickets = this.flightTicketSortService.sort(this.flightTickets);
    return this.flightTickets;
  }

  getDepartueLeg(segment: Segment, legs: Leg[]): Leg{
    const firstLegOfSegment = segment.LegIndexes[0];
    return legs[firstLegOfSegment];
  }

  getArrivalLeg(segment: Segment, legs: Leg[]): Leg{
    const lastLegOfSegment = segment.LegIndexes[segment.LegIndexes.length - 1];
    return legs[lastLegOfSegment];
  }
}
