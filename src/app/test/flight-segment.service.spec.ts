
import { FlightSegmentService } from '../service/flight-segment/flight-segment.service';
import { AirportService } from '../service/airport/airport.service.service';
import { CarrierService } from '../service/carrier/carrier.service';
import { Leg } from '../service/flight-search/response-model/leg';
import { FlightSegment } from '../model/flight.segment';

describe('FlightSegmentService', () => {
  let mainComponent: FlightSegmentService;
  beforeEach(() => { 
    let airportService = new AirportService();
    let carrierService = new CarrierService();
    mainComponent = new FlightSegmentService(airportService, carrierService); 
  });

  it('#createFlightSegment should handle empty objects', () => {
      //Arrange
      const departureLeg = new Leg();
      const arrivalLeg = new Leg();
      const expectedFlightSegment = new FlightSegment();
      expectedFlightSegment.routeDuration = 0;
      expectedFlightSegment.originPlace = '';
      expectedFlightSegment.originIata = '';
      expectedFlightSegment.originTime = undefined;
      expectedFlightSegment.destinationPlace = '';
      expectedFlightSegment.destinationIata = '';
      expectedFlightSegment.destinationTime = undefined;
      expectedFlightSegment.carriers = [];

      //Act
      mainComponent.createFlightSegment(null, departureLeg, arrivalLeg);

      //Assert
      expect(mainComponent.createFlightSegment(0, departureLeg, arrivalLeg)).toEqual(expectedFlightSegment);
  });

  it('#createFlightSegment should handle empty objects', () => {
    //Arrange
    const departureLeg = new Leg();
    departureLeg.AirlineName = 'SAS';
    departureLeg.Departure = new Date('2019-05-16T17:10:00');
    departureLeg.Origin = 'Copenhagen Airport, Copenhagen (CPH) Denmark';
    const arrivalLeg = new Leg();
    arrivalLeg.AirlineName = 'Ryanair';
    arrivalLeg.Arrival = new Date('2019-05-16T19:10:00');
    arrivalLeg.Destination = 'Gatwick, London (LGW) United Kingdom';
    const expectedFlightSegment = new FlightSegment();
    expectedFlightSegment.routeDuration = 0;
    expectedFlightSegment.originPlace = 'Copenhagen Airport';
    expectedFlightSegment.originIata = 'CPH';
    expectedFlightSegment.originTime = new Date('2019-05-16T17:10:00');
    expectedFlightSegment.destinationPlace = 'Gatwick';
    expectedFlightSegment.destinationIata = 'LGW';
    expectedFlightSegment.destinationTime = new Date('2019-05-16T19:10:00');
    expectedFlightSegment.carriers = ['SAS', 'Ryanair'];

    //Act
    mainComponent.createFlightSegment(null, departureLeg, arrivalLeg);
    
    //Assert
    expect(mainComponent.createFlightSegment(0, departureLeg, arrivalLeg)).toEqual(expectedFlightSegment);
});
});
