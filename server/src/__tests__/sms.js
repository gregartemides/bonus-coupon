import * as sms from '../sms';

test('isMorning() returns true at 6am', () => {
  expect(sms.isMorning(new Date('01/01/2018 06:00:00'))).toBe(true);
});

test('isMorning() returns false at 12pm', () => {
  expect(sms.isMorning(new Date('01/01/2018 12:00:00'))).toBe(false);
});

test('createMessage() returns proper message at 6am', () => {
  expect(sms.createMessage(new Date('01/01/2018 06:00:00'))).toBe('Good morning! Your promocode is AM123');
});

test('createMessage() returns proper message at 12pm', () => {
  expect(sms.createMessage(new Date('01/01/2018 12:00:00'))).toBe('Hello! Your promocode is PM456');
});
