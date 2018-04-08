import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import Form from '../Form';

Enzyme.configure({ adapter: new Adapter() });

const form = Enzyme.shallow(<Form />);

test('Form to render correct children', () => {
  expect(form.find('form')).toHaveLength(1);
  expect(form.find('PhoneField')).toHaveLength(1);
  expect(form.find('CheckboxField')).toHaveLength(2);
  expect(form.find('button')).toHaveLength(1);
  expect(form.find('Status')).toHaveLength(1);
});

test('validate() returns false if form is invalid', () => {
  form.setState({
    phone: '',
    over18: false,
    acceptTerms: false,
  });
  expect(form.instance().validate()).toBe(false);
});

test('validate() returns true if form is valid', () => {
  form.setState({
    phone: '+123',
    over18: true,
    acceptTerms: true,
  });
  expect(form.instance().validate()).toBe(true);
});
