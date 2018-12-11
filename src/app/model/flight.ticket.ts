import { FlightSegment } from './flight.segment';

export class FlightTicket {
    index: number;
    flightSegments: FlightSegment[];
    price: string;
    currency: string;
    deepLink: string;
}
