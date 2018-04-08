import React from 'react';
import PropTypes from 'prop-types';

const Status = ({ responseReceived, responseMessage }) =>
  (responseReceived ? <div>{responseMessage}</div> : null);

Status.propTypes = {
  responseReceived: PropTypes.bool.isRequired,
  responseMessage: PropTypes.string,
};

Status.defaultProps = {
  responseMessage: '',
};

export default Status;
