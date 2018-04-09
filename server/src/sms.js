import twilio from 'twilio';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

export const isMorning = date => date.getHours() < 12;

export const createMessage = date =>
  (isMorning(date)
    ? 'Good morning! Your promocode is AM123'
    : 'Hello! Your promocode is PM456');

export const sendSms = to =>
  twilio(
    process.env.ACCOUNT_SID,
    process.env.AUTH_TOKEN,
  ).messages.create({
    to,
    from: process.env.FROM_NUMBER,
    body: createMessage(new Date()),
  })
    .then(() =>
      ({
        message: 'Success! In a few moments you will receive the promocode SMS.',
      }))
    .catch(error =>
      ({
        message: `Error! ${error.message}`,
      }));

export const controller = (req, res) =>
  sendSms(req.body.phone)
    .then(json => res.json(json));
