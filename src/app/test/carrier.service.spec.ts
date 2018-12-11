import { CarrierService } from '../service/carrier/carrier.service';

describe('CarrierService', () => {
  let mainComponent: CarrierService;
  beforeEach(() => { mainComponent = new CarrierService(); });

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

  it('#addCarrier should not add null', () => {
    const carrier = null;
    const carriers = null;
    const expectedCarriers = [];
    expect(mainComponent.addCarrier(carrier, carriers)).toEqual(expectedCarriers);
});
});
