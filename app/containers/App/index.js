
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Switch, Route, NavLink } from 'react-router-dom';
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
import Bullet from './Bullet';
import Content from './Content';
import CrossMenu from './CrossMenu';
// import Footer from './Footer';
import Header from './Header';
import HeaderLangBar from './HeaderLangBar';
import HeaderLogo from './HeaderLogo';
import HeaderTitle from './HeaderTitle';
// import HeaderBar from './HeaderBar';
// import H1 from './H1';
// import LangBar from './LangBar';
import LinkGroup from './LinkGroup';
import LinkText from './LinkText';
import MenuItem from './MenuItem';
import MenuItems from './MenuItems';
import HomeNavLink from './HomeNavLink';
import StyledNavLink from './StyledNavLink';
import P from './P';
// import HeaderLeft from './HeaderLeft';
// import HeaderRight from './HeaderRight';

import messages from './messages';

const validRoutes = {
  '/': true,
  '/about': false,
  '/projects': false,
  '/blog': false,
  '/contact': false,
};

export function App(props) {
  //  NOTE: if on home page, render landing style menu. Through className, or render separate component.
  //  If I render separate component, will this affect the css transitions? I will have to depend on react-transition-group for the render
  //  Also having the component will unmount, and the other will have to mount. No way to link the two for a smooth `transition`
  console.log('App    props.location.pathname: ', props.location.pathname);
  console.log('validRoutes: ', validRoutes);
  const isMenuActive = validRoutes[props.location.pathname] || false;
  console.log('isMenuActive: ', isMenuActive);
  return (
    <AppWrapper>

      <Header currentPath={props.location.pathname}>

        <HeaderLogo><HomeNavLink to="/" activeClassName="hurray">R</HomeNavLink></HeaderLogo>

        {/* <HeaderTitle>Web Dev</HeaderTitle> */}

        <HeaderLangBar>
          <A isActive={props.locale === 'en'} role="button" tabIndex={0} onClick={() => props.changeLocaleLang('en')}><span>EN</span></A>
          <A isActive={props.locale === 'es'} role="button" tabIndex={0} onClick={() => props.changeLocaleLang('es')}><span>ES</span></A>
          <A isActive={props.locale === 'ko'} role="button" tabIndex={0} onClick={() => props.changeLocaleLang('ko')}><span>KO</span></A>
        </HeaderLangBar>

        <CrossMenu active={isMenuActive}>
          <MenuItems>
            <MenuItem to="/about" activeClassName="hurray">
              <LinkGroup>
                <Bullet right />
                <LinkText><FormattedMessage {...messages.link1} /></LinkText>
              </LinkGroup>
            </MenuItem>
            <MenuItem to="/projects" activeClassName="hurray">
              <LinkGroup>
                <Bullet left />
                <LinkText><FormattedMessage {...messages.link2} /></LinkText>
              </LinkGroup>
            </MenuItem>
            <MenuItem to="/blog" activeClassName="hurray">
              <LinkGroup>
                <Bullet right />
                <LinkText><FormattedMessage {...messages.link3} /></LinkText>
              </LinkGroup>
            </MenuItem>
            <MenuItem to="/contact" activeClassName="hurray">
              <LinkGroup>
                <Bullet left />
                <LinkText><FormattedMessage {...messages.link4} /></LinkText>
              </LinkGroup>
            </MenuItem>
          </MenuItems>
        </CrossMenu>
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
