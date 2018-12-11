import { Injectable } from '@angular/core';
import { FlightTicket } from 'src/app/model/flight.ticket';
import { FlightSearchServiceResponse } from '../flight-search/response-model/flight-search-service.response';
import { FlightSegmentService } from '../flight-segment/flight-segment.service';
import { Leg } from '../flight-search/response-model/leg';
import { Segment } from '../flight-search/response-model/segment';
import { FlightTicketSortService } from '../flight-ticket-sort/flight-ticket-sort.service';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchResponseTransformService {

  currency = 'HUF';
  priceRoundDepth  = 3;
  flightTickets:FlightTicket[];

  constructor(private flightSegmentService: FlightSegmentService,
             private flightTicketSortService: FlightTicketSortService) {
               this.flightTickets = new Array();
            }

  transform(flightSearchServiceResponse: FlightSearchServiceResponse): FlightTicket[] {
      flightSearchServiceResponse.Flights.forEach(flight => {
        const flightTicket = new FlightTicket();
        flightTicket.flightSegments = new Array();
        flight.SegmentIndexes.forEach(segmentIndex => {
          const segment = flightSearchServiceResponse.Segments[segmentIndex];
          const departureLeg = this.getDepartueLeg(segment, flightSearchServiceResponse);
          const arrivalLeg = this.getArrivalLeg(segment, flightSearchServiceResponse);
          const flightSegment = this.flightSegmentService.createFlightSegment(segment.Duration, departureLeg, arrivalLeg);
          flightTicket.flightSegments.push(flightSegment);
        });
      this.flightTickets.push(flightTicket);
    });
    flightSearchServiceResponse.Offers.forEach(x => {
      const flight = this.flightTickets[x.FlightIndex];
      flight.deepLink = x.Deeplink;
      flight.currency = this.currency;
      flight.price = Number(x.Price).toFixed(this.priceRoundDepth);
    });
    this.flightTickets = this.flightTicketSortService.sort(this.flightTickets);
    return this.flightTickets;
  }

  getDepartueLeg(segment: Segment, flightSearchServiceResponse: FlightSearchServiceResponse): Leg{
    const firstLegOfSegment = segment.LegIndexes[0];
    return flightSearchServiceResponse.Legs[firstLegOfSegment];
  }

  getArrivalLeg(segment: Segment, flightSearchServiceResponse: FlightSearchServiceResponse): Leg{
    const lastLegOfSegment = segment.LegIndexes[segment.LegIndexes.length - 1];
    return flightSearchServiceResponse.Legs[lastLegOfSegment];
  }
}
