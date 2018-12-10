import { FlightSegment } from './flight.segment';

export class FlightTicket {
    flightSegments: FlightSegment[];
    price: String;
    currency: String;
}
