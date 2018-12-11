import { AirportService } from '../service/airport/airport.service.service';

describe('AirportService', () => {
  let mainComponent: AirportService;
  beforeEach(() => { mainComponent = new AirportService(); });

  it('#getAirportCode should return airport cod', () => {
    expect(mainComponent.getAirportCode('Copenhagen Airport, Copenhagen (CPH) Denmark')).toBe('CPH');
  });

  it('#getAirportCode should return airport cod', () => {
      expect(mainComponent.getAirportCode('Gatwick, London (LGW) United Kingdom')).toBe('LGW');
    });

  it('#getAirportCode should return airport code', () => {
  expect(mainComponent.getAirportCode('Frankfurt Intl, Frankfurt (FRA) Germany')).toBe('FRA');
  });

  it('#getAirportCode should return no airport code when there is no airport code', () => {
      expect(mainComponent.getAirportCode('Frankfurt Intl, Frankfurt () Germany')).toBe('');
  });

  it('#getAirportCode should return nothing when no brackets', () => {
    expect(mainComponent.getAirportCode('Frankfurt Intl, Frankfurt Germany')).toBe('');
});

  it('#getAirportPlace should get right place', () => {
      expect(mainComponent.getAirportPlace('Frankfurt Intl, Frankfurt Germany')).toBe('Frankfurt Intl');
  });

  it('#getAirportPlace should return no airport code when there is no airport code', () => {
      expect(mainComponent.getAirportPlace('Copenhagen Airport, Copenhagen (CPH) Denmark')).toBe('Copenhagen Airport');
  });

  it('#getAirportPlace should return full string if no komma', () => {
    expect(mainComponent.getAirportPlace('Copenhagen Airport Copenhagen (CPH) Denmark')).toBe('Copenhagen Airport Copenhagen (CPH) Denmark');
    });

  it('#getAirportPlace should handle null', () => {
    expect(mainComponent.getAirportPlace(null)).toBe('');
  });

  it('#getAirportCode should handle null', () => {
    expect(mainComponent.getAirportCode(null)).toBe('');
  });
});
