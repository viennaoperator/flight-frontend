import { FlightSegment } from './flight.segment';

export class FlightTicket {
    flightSegments: FlightSegment[];
    price: Number;
    currency: string;
    deepLink: string;
}
