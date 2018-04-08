import React from 'react';
import PropTypes from 'prop-types';

const PhoneField = ({ phone, handleChange, formSubmitted }) =>
  (
    <div>
      <label htmlFor="phone">Mobile phone *</label>
      <input
        id="phone"
        placeholder="ex. +35799123456"
        value={phone}
        onChange={e => handleChange(e)}
      />
      {formSubmitted &&
      !phone && <label htmlFor="phone">Required</label>}
    </div>
  );

PhoneField.propTypes = {
  phone: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  formSubmitted: PropTypes.bool.isRequired,
};

PhoneField.defaultProps = {
  phone: '',
};

export default PhoneField;
