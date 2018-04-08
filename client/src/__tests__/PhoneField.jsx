import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import PhoneField from '../PhoneField';

Enzyme.configure({ adapter: new Adapter() });

const phoneField = Enzyme.shallow(<PhoneField

  phone=""
  formSubmitted={false}
  handleChange={() => {}}
/>);

test('Empty phone does not show required error before form submission.', () => {
  expect(phoneField.find('label')).toHaveLength(1);
});

test('Empty phone shows required error after form submission.', () => {
  phoneField.setProps({ formSubmitted: true });
  expect(phoneField.find('label')).toHaveLength(2);
});

test('Filled phone does not show required error after form submission.', () => {
  phoneField.setProps({ formSubmitted: true, phone: '+1232132' });
  expect(phoneField.find('label')).toHaveLength(1);
});
