import { FlightSegment } from './flight.segment';

export class FlightTicket {
    flightSegments: FlightSegment[];
    price: string;
    currency: string;
    deepLink: string;
}
