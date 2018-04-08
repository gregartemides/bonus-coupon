import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import CheckboxField from '../CheckboxField';

Enzyme.configure({ adapter: new Adapter() });

const checkboxField = Enzyme.shallow(<CheckboxField
  id="ab"
  label="This is a label"
  checked={false}
  formSubmitted={false}
  handleChange={() => {}}
/>);

test('Unchecked field does not show required error before form submission.', () => {
  expect(checkboxField.find('label')).toHaveLength(1);
});

test('Unchecked field shows required error after form submission.', () => {
  checkboxField.setProps({ formSubmitted: true });
  expect(checkboxField.find('label')).toHaveLength(2);
});

test('Checked field does not show required error after form submission.', () => {
  checkboxField.setProps({ formSubmitted: true, checked: true });
  expect(checkboxField.find('label')).toHaveLength(1);
});
