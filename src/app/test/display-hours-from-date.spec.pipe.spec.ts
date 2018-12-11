import { DisplayHoursFromDate } from '../pipe/display-hours-from-date.pipe';

describe('DisplayHoursFromDatePipe', () => {
    let mainComponent: DisplayHoursFromDate;
    beforeEach(() => { mainComponent = new DisplayHoursFromDate(); });

    it('#transform should return valid hours and minutes format', () => {
      const date = new Date('1995-12-17T03:24:00');
      expect(mainComponent.transform(date)).toBe('03:24');
    });

    it('#transform should return valid hours and minutes format', () => {
        const date = new Date('1995-12-17T12:24:00');
        expect(mainComponent.transform(date)).toBe('12:24');
    });

    it('#transform should return valid hours and minutes format', () => {
        const date = new Date('1995-12-17T00:24:00');
        expect(mainComponent.transform(date)).toBe('00:24');
    });

    it('#transform should return valid hours and minutes format', () => {
        expect(mainComponent.transform(null)).toBe('');
    });

    it('#transform should return valid hours and minutes format', () => {
        const date = new Date('1995-12-17T06:00:00');
        expect(mainComponent.transform(date)).toBe('06:00');
    });
});
