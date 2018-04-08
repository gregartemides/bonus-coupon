import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import Status from '../Status';

Enzyme.configure({ adapter: new Adapter() });

const status = Enzyme.shallow(<Status
  responseReceived={false}
  responseMessage=""
/>);

test('Before a response is received no status is shown.', () => {
  expect(status.find('div')).toHaveLength(0);
});

test('After a response is received status is shown.', () => {
  status.setProps({ responseReceived: true, responseMessage: 'success' });
  expect(status.find('div')).toHaveLength(1);
  expect(status.find('div').text()).toBe('success');
});
