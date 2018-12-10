import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MomondoLogoComponent } from './momondo-logo/momondo-logo.component';
import { FlightTicketsComponent } from './flight-tickets/flight-tickets.component';
import { FlightTicketSummaryComponent } from './flight-ticket-summary/flight-ticket-summary.component';
import { FlightTicketSummaryDealComponent } from './flight-ticket-summary/flight-ticket-summary-deal/flight-ticket-summary-deal.component';
import { FlightTicketSummaryHeaderComponent } from './flight-ticket-summary/flight-ticket-summary-header/flight-ticket-summary-header.component';
import { FlightTicketSummarySegmentComponent } from './flight-ticket-summary/flight-ticket-summary-segment/flight-ticket-summary-segment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MomondoLogoComponent,
    FlightTicketsComponent,
    FlightTicketSummaryComponent,
    FlightTicketSummaryDealComponent,
    FlightTicketSummaryHeaderComponent,
    FlightTicketSummarySegmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
