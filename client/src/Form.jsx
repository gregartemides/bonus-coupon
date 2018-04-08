import React from 'react';
import util from './lib/util';
import sendCoupon from './lib/sendCoupon';
import PhoneField from './PhoneField';
import CheckboxField from './CheckboxField';
import Status from './Status';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      over18: false,
      acceptTerms: false,
      formSubmitted: false,
      responseReceived: false,
      responseMessage: '',
    };
  }

  handlePhoneChange(e) {
    // only allow +0123456789
    this.setState({ phone: util.discardNonNumeric(e.target.value) });
  }

  handleOver18Change(e) {
    this.setState({ over18: e.target.checked });
  }

  handleAcceptTermsChange(e) {
    this.setState({ acceptTerms: e.target.checked });
  }

  // validate form state
  validate() {
    return (
      this.state.phone !== '' && this.state.over18 && this.state.acceptTerms
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({ formSubmitted: true });
    // if valid, send post the phone to the api
    if (this.validate()) {
      sendCoupon(this.state.phone)
        .then(response => this.setState(response));
    }
  }

  render() {
    return (
      <form onSubmit={e => this.handleFormSubmit(e)}>

        <PhoneField
          phone={this.state.phone}
          formSubmitted={this.state.formSubmitted}
          handleChange={e => this.handlePhoneChange(e)}
        />

        <CheckboxField
          id="over18"
          label="I am over 18"
          checked={this.state.over18}
          formSubmitted={this.state.formSubmitted}
          handleChange={e => this.handleOver18Change(e)}
        />

        <CheckboxField
          id="acceptTerms"
          label="I accept the terms and conditions"
          checked={this.state.acceptTerms}
          formSubmitted={this.state.formSubmitted}
          handleChange={e => this.handleAcceptTermsChange(e)}
        />

        <div>
          <button type="submit">Send</button>
        </div>

        <Status
          responseReceived={this.state.responseReceived}
          responseMessage={this.state.responseMessage}
        />

      </form>
    );
  }
}
