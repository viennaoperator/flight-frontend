import { FlightTicketSortService } from '../service/flight-ticket-sort/flight-ticket-sort.service';
import { FlightTicket } from '../model/flight.ticket';

describe('FlightTicketSortService', () => {
  let mainComponent: FlightTicketSortService;
  beforeEach(() => { mainComponent = new FlightTicketSortService(); });

  it('#addCarrier should add carrier when in list', () => {
    const flightTickets: FlightTicket[] = new Array();
      const flightTicket1 = new FlightTicket();
      flightTicket1.price = "123.23";
      flightTickets.push(flightTicket1);
      const flightTicket2 = new FlightTicket();
      flightTicket2.price = "121.21";
      flightTickets.push(flightTicket2);
      const flightTicket3 = new FlightTicket();
      flightTicket3.price = "123.21";
      flightTickets.push(flightTicket3);

      const expectedArray: FlightTicket[] = new Array();
      expectedArray.push(flightTicket2);
      expectedArray.push(flightTicket3);
      expectedArray.push(flightTicket1);

      expect(mainComponent.sort(flightTickets)).toEqual(expectedArray);
  });
});
