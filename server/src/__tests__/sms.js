import twilio from 'twilio';
import dotenv from 'dotenv';
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


test('sendSms() resolves', () => {
  jest.mock('twilio', () => jest.fn());
  const create = jest.fn();
  const expectedResolution = 'Success! In a few moments you will receive the promocode SMS.';
  create.mockReturnValue(Promise.resolve(expectedResolution));
  twilio.mockImplementation(jest.fn(() => ({ messages: { create } })));

  sms.sendSms('+11111111');

  /*expect(twilio).toHaveBeenCalledWith(
    process.env.ACCOUNT_SID,
    process.env.AUTH_TOKEN
  );*/
  expect(create).resolves.toBe(expectedResolution);
});
