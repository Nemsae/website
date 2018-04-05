/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 *
 * NOTE: Took key out to prevent IntlProvider from remounting all children.
 * Instead we will have to wire each component that needs a re-render by subscribing to `locale`
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IntlProvider } from 'react-intl';

import { makeSelectLocale } from './selectors';

// export const MessagesContext = React.createContext();
// console.log('MessagesContext: ', MessagesContext);
export const { Provider, Consumer } = React.createContext();

export class LanguageProvider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    //  NOTE: messages here contains current (translated) messages, need to pass via context to children that are "subscribed"
    const messages = this.props.messages[this.props.locale];
    console.log('<LanguageProvider />     messages: ', messages);    //  eslint-disable-line no-console
    return (
      <Provider value={messages}>
        <IntlProvider locale={this.props.locale} messages={this.props.messages[this.props.locale]}>
          {React.Children.only(this.props.children)}
        </IntlProvider>
      </Provider>
    );
  }
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};


const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);
