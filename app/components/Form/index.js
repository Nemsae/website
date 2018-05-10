import React from 'react';
// import PropTypes from 'prop-types';
// import { CSSTransition } from 'react-transition-group';

import BigInput from './BigInput';
import SmallInput from './SmallInput';
import InfoInput from './InfoInput';
import Wrapper from './Wrapper';
// import messages from './messages3';

// import Animations from './Animations';

// NOTE: HOC

export class Form extends React.PureComponent {
  state = {}

  submitForm = () => {}

  // NOTE: check form validation state, if isValid, then animate inputs

  render() {
    console.log('<Form />     rendered!');     //  eslint-disable-line no-console
    return (
      <Wrapper>
        <BigInput id="name" className="white" placeholder="Name" tabIndex={0} onChange={this.handleChange} />
        <SmallInput id="email" className="white" placeholder="Email" tabIndex={0} onChange={this.handleChange} />
        <InfoInput id="message" className="white" placeholder="type your message here" tabIndex={0} onChange={this.handleChange} />
      </Wrapper>
    );
  }
}

Form.propTypes = {
  // active: PropTypes.bool,
};

export default Form;
