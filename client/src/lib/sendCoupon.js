import axios from 'axios';

export default phone =>
  axios.post(
    process.env.REACT_APP_API_URL || 'http://localhost:3001/api/sms-promotion',
    `phone=${encodeURIComponent(phone)}`,
    { headers: { 'content-type': 'application/x-www-form-urlencoded' } },
  )
    // success contacting server
    .then(json =>
      ({
        responseReceived: true,
        responseMessage: json.data.message,
      }))
    // error connecting to server or bad json response
    .catch(() =>
      ({
        responseReceived: true,
        responseMessage: 'Error! The SMS server is down.',
      }));
