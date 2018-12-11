import { Injectable } from '@angular/core';
import { FlightSegment } from 'src/app/model/flight.segment';
import { Leg } from '../flight-search/response-model/leg';
import { AirportService } from '../airport/airport.service.service';
import { CarrierService } from '../carrier/carrier.service';

@Injectable({
  providedIn: 'root'
})
export class FlightSegmentService {

  constructor(private airportService: AirportService,
              private carrierService: CarrierService) {
              }

  createFlightSegment(segmentDuration:number, departureLeg: Leg, arrivalLeg: Leg): FlightSegment{
    const flightSegment = new FlightSegment();
    flightSegment.routeDuration = segmentDuration;
    this.saveDepartureInfos(flightSegment, departureLeg);
    this.saveArrivalInfos(flightSegment, arrivalLeg);
    return flightSegment;
  }

  saveDepartureInfos(flightSegment: FlightSegment, departureLeg: Leg) {
    flightSegment.originIata = this.airportService.getAirportCode(departureLeg.Origin);
    flightSegment.originTime = departureLeg.Departure;
    flightSegment.originPlace = this.airportService.getAirportPlace(departureLeg.Origin);
    flightSegment.carriers = this.carrierService.addCarrier(departureLeg.AirlineName, flightSegment.carriers);
  }

  saveArrivalInfos(flightSegment: FlightSegment, arrivalLeg: Leg) {
    flightSegment.destinationIata = this.airportService.getAirportCode(arrivalLeg.Destination);
    flightSegment.destinationTime = arrivalLeg.Arrival;
    flightSegment.destinationPlace = this.airportService.getAirportPlace(arrivalLeg.Destination);
    flightSegment.carriers = this.carrierService.addCarrier(arrivalLeg.AirlineName, flightSegment.carriers);
  }
}
