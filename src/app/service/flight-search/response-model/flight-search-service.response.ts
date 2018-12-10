import { Flight } from './flight';
import { Leg } from './leg';
import { Offer } from './offer';
import { Segment } from './segment';

export class FlightSearchServiceResponse {
    Done: boolean;
    Flights: Flight[];
    Legs: Leg[];
    Offers: Offer[];
    Segments: Segment[];
}
