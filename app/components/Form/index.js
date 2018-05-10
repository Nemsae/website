import React from 'react';
// import PropTypes from 'prop-types';
// import { CSSTransition } from 'react-transition-group';

import BigInput from './BigInput';
import SmallInput from './SmallInput';
import InfoInput from './InfoInput';
import Wrapper from './Wrapper';
// import messages from './messages3';

// import Animations from './Animations';

// NOTE: Input Validation
// TODO: actually validate and sanitize
const validate = (formType, formValue) => {
  let isValid = 'invalid';
  if (!formValue) return isValid;

  switch (formType) {
    case 'name': {
      isValid = formValue.length > 0 && 'valid';
      break;
    }
    case 'email': {
      isValid = formValue.length > 0 && 'valid';
      break;
    }
    case 'message': {
      isValid = formValue.length > 0 && 'valid';
      break;
    }
    default:
      isValid = 'invalid';
  }

  return isValid;
};

// NOTE: Form Validation
const validateForm = (formInputs) => {
  const formKeys = Object.keys(formInputs);
  return formKeys.every((key) => formInputs[key].length > 0);
  // formKeys.every((key) => {
  //   return formInputs[key].length > 0;
  // });
};

// NOTE: HOC

export class Form extends React.PureComponent {
  state = {
    inputs: {
      name: '',
      email: '',
      message: '',
    },
  }

  submitForm = () => {}

  handleChange = (evt) => {
    const id = evt.target.id;
    const value = evt.target.value;
    this.setState((prevState) => ({
      ...prevState,
      inputs: {
        ...prevState.inputs,
        [id]: value,
      },
    }));
  }

  // NOTE: check form validation state, if isValid, then animate inputs

  render() {
    console.log('<Form />     rendered!');     //  eslint-disable-line no-console
    const { inputs } = this.state;
    console.log('<Form />     this.state', this.state);    //  eslint-disable-line no-console
    console.log('<Form />     inputs', inputs);    //  eslint-disable-line no-console
    return (
      <Wrapper className={`${validateForm(inputs) ? 'valid' : 'invalid'}`}>
        <BigInput id="name" className={`black ${validate('name', inputs.name)}`} placeholder="type your name" tabIndex={0} onChange={this.handleChange} value={inputs.name} autoFocus />
        <SmallInput id="email" className={`black ${validate('email', inputs.email)}`} placeholder="type your email" tabIndex={0} onChange={this.handleChange} value={inputs.email} />
        <InfoInput id="message" className={`black ${validate('message', inputs.message)}`} placeholder="type a message here" tabIndex={0} onChange={this.handleChange} value={inputs.message} />
      </Wrapper>
    );
  }
}

Form.propTypes = {
  // active: PropTypes.bool,
};

export default Form;
