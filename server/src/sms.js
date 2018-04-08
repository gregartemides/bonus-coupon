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

export const sendSms = (req, res) => {
  const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
  client.messages
    .create({
      to: req.body.phone,
      from: process.env.FROM_NUMBER,
      body: createMessage(new Date()),
    })
    .then(() =>
      res.json({
        message: 'Success! In a few moments you will receive the promocode SMS.',
      }))
    .catch(error =>
      res.json({
        message: `Error! ${error.message}`,
      }));
};
