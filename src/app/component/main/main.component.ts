import { Component, OnInit } from '@angular/core';
import { FlightSearchService } from '../../service/flight-search/flight-search.service';
import { Guid } from 'guid-typescript';
import { FlightTicket } from '../../model/flight.ticket';
import { FlightSearchResponseTransformService } from 'src/app/service/flight-search-response-transform/flight-search-response-transform.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  guid: Guid;
  flightTickets: FlightTicket[];
  retryInterval: number = 4000;

  constructor(private flightSearchService: FlightSearchService,
              private flightSearchResponseTransformService: FlightSearchResponseTransformService) { }

  ngOnInit() {
    this.guid = Guid.create();
    this.getFlightSearchResult();
  }

  getFlightSearchResult() {
    this.flightSearchService.getSearchResult(this.guid)
    .subscribe(
      searchResult =>  {
        if(!searchResult.Done) {
          this.retry();
        }
        this.flightTickets = this.flightSearchResponseTransformService.transform(searchResult)
      }
     );
  }

  retry() {
    var that = this;
    setTimeout(() => {
      that.getFlightSearchResult();
    }, that.retryInterval);
  }
}
