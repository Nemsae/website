/*  eslint-disable  */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { makeSelectLocation } from 'containers/App/selectors';
import { changeLocale } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';

import MaterialIcon from 'components/MaterialIcon';
// import FlagIcon from 'components/FlagIcon';

import A from './A';
import AppWrapper from './AppWrapper';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import HeaderBar from './HeaderBar';
import H1 from './H1';
import LangBar from './LangBar';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuItems from './MenuItems';
import P from './P';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

import messages from './messages';

export function App(props) {
  //  NOTE: if on home page, render landing style menu. Through className, or render separate component.
  //  If I render separate component, will this affect the css transitions? I will have to depend on react-transition-group for the render
  //  Also having the component will unmount, and the other will have to mount. No way to link the two for a smooth `transition`
  console.log('App    props.location.pathname: ', props.location.pathname);
  return (
    <AppWrapper>

      <Header currentPath={props.location.pathname}>
        <Menu>
          <MenuItems>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Projects</MenuItem>
            <MenuItem>Contact</MenuItem>
          </MenuItems>
        </Menu>
        {/* <HeaderLeft>
          <HeaderBar />
          <H1><b><FormattedMessage {...messages.header1} /></b><br /><FormattedMessage {...messages.header2} /></H1>
        </HeaderLeft>
        <HeaderRight>
          <LangBar>
            <A isActive={props.locale === 'en'} role="button" tabIndex={0} onClick={() => props.changeLocaleLang('en')}><span>EN</span></A>
            <A isActive={props.locale === 'es'} role="button" tabIndex={0} onClick={() => props.changeLocaleLang('es')}><span>ES</span></A>
            <A isActive={props.locale === 'ko'} role="button" tabIndex={0} onClick={() => props.changeLocaleLang('ko')}><span>KO</span></A>
          </LangBar>
          <HeaderBar />
        </HeaderRight> */}
      </Header>

      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Content>

    </AppWrapper>
  );
}

App.propTypes = {
  locale: PropTypes.string,
  location: PropTypes.object,
  changeLocaleLang: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    changeLocaleLang: (lang) => dispatch(changeLocale(lang)),
  };
}

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
  location: makeSelectLocation(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect
)(App);
