import axios from 'axios';
import sendCoupon from '../lib/sendCoupon';

jest.mock('axios');

test('Should reject with proper response.', () => {
  const expectedResponse = {
    responseReceived: true,
    responseMessage: 'Error! The SMS server is down.',
  };

  axios.post.mockReturnValue(Promise.reject(expectedResponse));

  return sendCoupon('+12312345678')
    .catch(data =>
      expect(data).toEqual(expectedResponse));
});

test('Should resolve with proper response.', () => {
  const expectedResponse = {
    responseReceived: true,
    responseMessage: 'Success! In a few moments you will receive the promocode SMS.',
  };

  axios.post.mockReturnValue(Promise.resolve(expectedResponse));

  return sendCoupon('+12312345678')
    .catch(data =>
      expect(data).toEqual(expectedResponse));
});
