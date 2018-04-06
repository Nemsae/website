import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import { transitionAll400 } from 'utils/transitions';

import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { Consumer } from 'containers/LanguageProvider';

import messages from './messages';

//  NOTE: This component is still being re-rendered.
//  the transform properties (set by GSAP is being reset)
//  SOLUTION: try to do the opposite, so animate transition BEFORE component updates with new props.
//  SOLUTION: try to do the opposite, so animate transition BEFORE component updates with new props.
//  SOLUTION: try to do the opposite, so animate transition BEFORE component updates with new props.
//  SOLUTION: try to do the opposite, so animate transition BEFORE component updates with new props.
//  SOLUTION: try to do the opposite, so animate transition BEFORE component updates with new props.
//  SOLUTION: try to do the opposite, so animate transition BEFORE component updates with new props.
const LinkTextPrimitive = styled.h2.attrs({ className: 'link-text' })`
  font-size: 24px;
  text-decoration: none;
  text-transform: lowercase;

  color: #000;

  ${transitionAll400}

  ${''/* ${this.props.active && 'opacity: 1'} */}
  ${''/* ${this.props.active ? 'opacity: 1' : 'opacity: 0'} */}
`;

export class LinkText extends React.PureComponent {
  componentWillReceiveProps(nextProps, nextState) {
    console.log('<LinkText />     CWRP!');     //  eslint-disable-line no-console
  }

  componentDidUpdate(prevProps, prevState) {     //  eslint-disable-line no-unused-vars
    console.log('<LinkText />     CDU!');     //  eslint-disable-line no-console
  }

  componentWillUnmount() {
    console.log('<LinkText />     CWU!');     //  eslint-disable-line no-console
  }

  render() {
    console.log('<LinkText />     rendered!');    //  eslint-disable-line no-console
    // console.log('<LinkText />    this.props.locale: ', this.props.locale);    //  eslint-disable-line no-console
    // console.log('messages[`link${this.props.id}`]: ', messages[`link${this.props.id}`]);

    return (
      <Consumer>
        {(appMessages) => {
          // console.log('appMessages: ', appMessages);
          const messageId = messages[`link${this.props.id}`].id;
          console.log('messageId: ', messageId);
          // console.log('messages[`link${this.props.id}`]: ', messages[`link${this.props.id}`]);
          return <LinkTextPrimitive {...this.props}><FormattedMessage id={messageId} defaultMessage={appMessages[messageId]} /></LinkTextPrimitive>;
        }}
        {/* {(appMessages) => (
          <LinkTextPrimitive key={this.props.locale} {...this.props}><FormattedMessage {...appMessages[`link${this.props.id}`]} /></LinkTextPrimitive>
        )} */}
      </Consumer>
    );
    //
    // return (
    //   <LinkTextPrimitive {...this.props}><FormattedMessage {...messages[`link${this.props.id}`]} /></LinkTextPrimitive>
    // );
  }
}

LinkText.propTypes = {
  // children: PropTypes.any,
  // locale: PropTypes.string,
  // active: PropTypes.bool,
  id: PropTypes.string,
};

export default LinkText;

// const mapStateToProps = createStructuredSelector({
//   locale: makeSelectLocale(),
// });
//
// const withConnect = connect(mapStateToProps);
//
// export default compose(
//   withConnect
// )(LinkText);
