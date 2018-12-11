import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightSearchServiceResponse } from './response-model/flight-search-service.response';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {

  apiPath = 'https://stjxo8vo34.execute-api.eu-west-1.amazonaws.com/prod/flight-search/1.1/';

  constructor(private http: HttpClient) { }

  public getSearchResult(guid: Guid): Observable<FlightSearchServiceResponse> {
    return this.http.get<FlightSearchServiceResponse>(this.apiPath + guid);
  }
}
