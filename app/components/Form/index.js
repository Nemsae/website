import React from 'react';
// import PropTypes from 'prop-types';
// import { CSSTransition } from 'react-transition-group';

import BigInput from './BigInput';
import SmallInput from './SmallInput';
import InfoInput from './InfoInput';
import Wrapper from './Wrapper';
// import messages from './messages3';

// import Animations from './Animations';

// NOTE: Form Validation
// TODO: actually validate and sanitize
const validate = (formType, formValue) => {
  let isValid = false;
  if (!formValue) return isValid;

  switch (formType) {
    case 'name': {
      isValid = formValue.length;
      break;
    }
    case 'email': {
      isValid = formValue.length;
      break;
    }
    case 'message': {
      isValid = formValue.length;
      break;
    }
    default:
      isValid = false;
  }

  return isValid;
}
// NOTE: HOC

export class Form extends React.PureComponent {
  state = {
    inputs: {
      // name: '',
      // email: '',
      // message: '',
    },
  }

  submitForm = () => {}

  handleChange = (evt) => {
    // console.log('evt.target.id: ', evt.target.id);
    // console.log('evt.target.value: ', evt.target.value);
    // this.setState({ [evt.target.id]: evt.target.value });
    const id = evt.target.id;
    const value = evt.target.value;
    console.log('id: ', id);
    console.log('value: ', value);
    this.setState((prevState) => ({
      ...prevState.inputs,
      [id]: value,
    }));
  }

  // NOTE: check form validation state, if isValid, then animate inputs

  render() {
    console.log('<Form />     rendered!');     //  eslint-disable-line no-console
    const { inputs } = this.state;
    console.log('<Form />     this.state', this.state);    //  eslint-disable-line no-console
    console.log('<Form />     inputs', inputs);    //  eslint-disable-line no-console
    return (
      <Wrapper>
        <BigInput id="name" className={`white ${validate('name', inputs.name)}`} placeholder="name" tabIndex={0} onChange={this.handleChange} value={inputs.name} />
        <SmallInput id="email" className={`white ${validate('email', inputs.email)}`} placeholder="email" tabIndex={0} onChange={this.handleChange} value={inputs.email} />
        <InfoInput id="message" className={`white ${validate('message', inputs.message)}`} placeholder="type a message here" tabIndex={0} onChange={this.handleChange} value={inputs.message} />
      </Wrapper>
    );
  }
}

Form.propTypes = {
  // active: PropTypes.bool,
};

export default Form;
