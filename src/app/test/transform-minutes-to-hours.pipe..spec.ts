import { TransformMinutesToHours } from '../pipe/transform-minutes-to-hours.pipe';

describe('TransformMinutesToHoursPipe', () => {
    let mainComponent: TransformMinutesToHours;
    beforeEach(() => { mainComponent = new TransformMinutesToHours(); });

    it('#transform should return valid hours and minutes format', () => {
      expect(mainComponent.transform(90)).toBe('1h30m');
    });

    it('#transform should return valid hours and minutes format', () => {
        expect(mainComponent.transform(30)).toBe('30m');
    });

    it('#transform should return valid hours and minutes format', () => {
        expect(mainComponent.transform(5)).toBe('5m');
    });

    it('#transform should return valid hours and minutes format', () => {
        expect(mainComponent.transform(61)).toBe('1h1m');
    });

    it('#transform should return valid hours and minutes format', () => {
        expect(mainComponent.transform(null)).toBe('');
    });
});
