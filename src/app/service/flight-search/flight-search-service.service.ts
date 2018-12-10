import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightSearchServiceResponse } from './response-model/flight-search-service.response';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchServiceService {

  apiPath = 'http://momondodevapi.herokuapp.com/1.0/FlightSearch/';

  constructor(private http: HttpClient) { }

  public getSearchResult(guid: String): Observable<FlightSearchServiceResponse[]> {
    return this.http.get<FlightSearchServiceResponse[]>(this.apiPath + guid);
  }
}
