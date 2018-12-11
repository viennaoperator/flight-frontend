import { MainComponent } from './main.component';

// Straight Jasmine testing without Angular's testing support
describe('MainComponent', () => {
    let mainComponent: MainComponent;
    beforeEach(() => { mainComponent = new MainComponent(null); });

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

    it('#getAirportPlace should get right place', () => {
        expect(mainComponent.getAirportPlace('Frankfurt Intl, Frankfurt Germany')).toBe('Frankfurt Intl');
    });

    it('#getAirportPlace should return no airport code when there is no airport code', () => {
        expect(mainComponent.getAirportPlace('Copenhagen Airport, Copenhagen (CPH) Denmark')).toBe('Copenhagen Airport');
    });

    it('#addCarrier should add carrier when in list', () => {
        const carrier = 'MyAir';
        const carriers = ['Ryanair', 'SAS'];
        const expectedCarriers = ['Ryanair', 'SAS', 'MyAir'];
        expect(mainComponent.addCarrier(carrier, carriers)).toEqual(expectedCarriers);
    });

    it('#addCarrier should not add carrier when already in list', () => {
        const carrier = 'SAS';
        const carriers = ['Ryanair', 'SAS'];
        const expectedCarriers = ['Ryanair', 'SAS'];
        expect(mainComponent.addCarrier(carrier, carriers)).toEqual(expectedCarriers);
    });

    it('#addCarrier should add carrier list doesnt exist', () => {
        const carrier = 'SAS';
        const carriers = null;
        const expectedCarriers = ['SAS'];
        expect(mainComponent.addCarrier(carrier, carriers)).toEqual(expectedCarriers);
    });
  });
