import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { MainComponent } from './component/main/main.component';
import { MomondoLogoComponent } from './component/momondo-logo/momondo-logo.component';
import { FlightTicketsComponent } from './component/flight-tickets/flight-tickets.component';
import { FlightTicketSummaryComponent } from './component/flight-ticket-summary/flight-ticket-summary.component';
import { FlightTicketSummaryDealComponent } from './component/flight-ticket-summary/flight-ticket-summary-deal/flight-ticket-summary-deal.component';
import { FlightTicketSummaryHeaderComponent } from './component/flight-ticket-summary/flight-ticket-summary-header/flight-ticket-summary-header.component';
import { FlightTicketSummarySegmentComponent } from './component/flight-ticket-summary/flight-ticket-summary-segment/flight-ticket-summary-segment.component';
import { FlightSearchService} from './service/flight-search/flight-search.service';
import { TransformMinutesToHours } from './pipe/transform-minutes-to-hours.pipe';
import { DisplayHoursFromDate } from './pipe/display-hours-from-date.pipe';
import { AirportService } from './service/airport/airport.service.service';

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
    FlightTicketSummarySegmentComponent,
    TransformMinutesToHours,
    DisplayHoursFromDate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FlightSearchService,
    AirportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
