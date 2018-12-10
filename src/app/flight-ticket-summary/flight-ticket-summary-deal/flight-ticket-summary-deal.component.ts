import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flight-ticket-summary-deal',
  templateUrl: './flight-ticket-summary-deal.component.html',
  styleUrls: ['./flight-ticket-summary-deal.component.css']
})
export class FlightTicketSummaryDealComponent implements OnInit {

  @Input() price: String;
  @Input() currency: String;

  constructor() { }

  ngOnInit() {
  }

}
