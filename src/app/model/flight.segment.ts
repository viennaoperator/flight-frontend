export class FlightSegment {
    index: number;
    carriers: string[];
    originIata: string;
    originTime: Date;
    originPlace: string;
    destinationIata: string;
    destinationTime: Date;
    destinationPlace: string;
    routeDuration: number;
}
