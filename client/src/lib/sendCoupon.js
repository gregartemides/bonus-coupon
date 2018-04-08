import axios from 'axios';

export default phone =>
  axios.post(
    process.env.REACT_APP_API_URL,
    `phone=${encodeURIComponent(phone)}`,
    { headers: { 'content-type': 'application/x-www-form-urlencoded' } },
  )
    // parse response
    .then(res => res.json())
    // success contacting server
    .then(json =>
      ({
        responseReceived: true,
        responseMessage: json.message,
      }))
    // error connecting to server or bad json response
    .catch(() =>
      ({
        responseReceived: true,
        responseMessage: 'Error! The SMS server is down.',
      }));