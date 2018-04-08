import util from '../lib/util';

test('Non numeric characters are discarded', () => {
  expect(util.discardNonNumeric('akdfjklasd**()')).toBe('');
  expect(util.discardNonNumeric('+dshfjsf234234')).toBe('+234234');
});
