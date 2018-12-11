import { TestBed } from '@angular/core/testing';

import { FlightSearchResponseTransformService } from '../service/flight-search-response-transform/flight-search-response-transform.service';

describe('FlightSearchResponseTransformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightSearchResponseTransformService = TestBed.get(FlightSearchResponseTransformService);
    expect(service).toBeTruthy();
  });
});
