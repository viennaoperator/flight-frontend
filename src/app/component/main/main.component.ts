import { Component, OnInit } from '@angular/core';
import { FlightSearchServiceService } from '../../service/flight-search/flight-search-service.service';
import { FlightSearchServiceResponse } from '../../service/flight-search/response-model/flight-search-service.response';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  guid: String;
  flightSearchResult: FlightSearchServiceResponse[];

  constructor(private flightSearchService: FlightSearchServiceService) { }

  ngOnInit() {
    this.guid = '200190de-8dc5-4013-9b1b-7feaf71a742a';
  }

  getFlightSearchResult() {
    this.flightSearchService.getSearchResult(this.guid)
    .subscribe(flightSearchResult => this.flightSearchResult = flightSearchResult);
    // TODO: transform into view objects
  }
}
