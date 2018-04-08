import React from 'react';
import PropTypes from 'prop-types';

const CheckboxField = ({
  id, label, checked, handleChange, formSubmitted,
}) =>
  (
    <div>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={e => handleChange(e)}
      />
      <label htmlFor={id}>{label} *</label>
      {formSubmitted &&
        !checked && <label htmlFor={id}>Required</label>}
    </div>
  );

CheckboxField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  formSubmitted: PropTypes.bool.isRequired,
};

export default CheckboxField;
