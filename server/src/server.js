import express from 'express';
import bodyParser from 'body-parser';
import { sendSms } from './sms';

const app = express();

// setup CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));

// here's the api route!
app.post('/api/sms-promotion', sendSms);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Listening on ${PORT}`);
});
