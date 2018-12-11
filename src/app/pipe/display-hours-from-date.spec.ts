import { DisplayHoursFromDate } from './display-hours-from-date';

describe('DisplayHoursFromDate', () => {
    let mainComponent: DisplayHoursFromDate;
    beforeEach(() => { mainComponent = new DisplayHoursFromDate(); });

    it('#transform should return valid hours and minutes format', () => {
      const date = new Date('1995-12-17T03:24:00');
      expect(mainComponent.transform(date)).toBe('3:24');
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
});