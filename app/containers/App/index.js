
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
import HeaderBreadCrumb from './HeaderBreadCrumb';
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

export class App extends React.PureComponent {
  state = {
    hoveredLocation: '',
  }

  resetHoveredLocation = () => {
    this.setState({
      hoveredLocation: '',
    });
  }

  captureHoveredLocation = (evt) => {
    this.setState({
      hoveredLocation: evt.target.id,
    });
  }

// export function App(props) {
  render() {
    //  NOTE: if on home page, render landing style menu. Through className, or render separate component.
    //  If I render separate component, will this affect the css transitions? I will have to depend on react-transition-group for the render
    //  Also having the component will unmount, and the other will have to mount. No way to link the two for a smooth `transition`
    console.log('App    this.props.location.pathname: ', this.props.location.pathname);
    const isMenuActive = validRoutes[this.props.location.pathname] || false;
    return (
      <AppWrapper>
        <Header currentPath={this.props.location.pathname}>

          <HeaderLogo><HomeNavLink to="/" activeClassName="active-link">R</HomeNavLink></HeaderLogo>

          {/* <HeaderTitle>Web Dev</HeaderTitle> */}

          <HeaderBreadCrumb strikeThrough={this.state.hoveredLocation.length ? true : false}><b>{this.props.location.pathname}</b><i>{this.state.hoveredLocation}</i></HeaderBreadCrumb>

          <HeaderLangBar>
            <A isActive={this.props.locale === 'en'} role="button" tabIndex={0} onClick={() => this.props.changeLocaleLang('en')}><span>EN</span></A>
            <A isActive={this.props.locale === 'es'} role="button" tabIndex={0} onClick={() => this.props.changeLocaleLang('es')}><span>ES</span></A>
            <A isActive={this.props.locale === 'ko'} role="button" tabIndex={0} onClick={() => this.props.changeLocaleLang('ko')}><span>KO</span></A>
          </HeaderLangBar>

          <CrossMenu active={isMenuActive}>
            <MenuItems>
              <MenuItem id="about" to="/about" activeClassName="active-link" onMouseOver={this.captureHoveredLocation} onFocus={this.captureHoveredLocation} onMouseOut={this.resetHoveredLocation}>
                <LinkGroup>
                  <Bullet right />
                  <LinkText><FormattedMessage {...messages.link1} /></LinkText>
                </LinkGroup>
              </MenuItem>
              <MenuItem id="projects" to="/projects" activeClassName="active-link" onMouseOver={this.captureHoveredLocation} onFocus={this.captureHoveredLocation} onMouseOut={this.resetHoveredLocation}>
              <LinkGroup>
                <Bullet left />
                <LinkText><FormattedMessage {...messages.link2} /></LinkText>
              </LinkGroup>
            </MenuItem>
            <MenuItem id="blog" to="/blog" activeClassName="active-link" onMouseOver={this.captureHoveredLocation} onFocus={this.captureHoveredLocation} onMouseOut={this.resetHoveredLocation}>
            <LinkGroup>
              <Bullet right />
              <LinkText><FormattedMessage {...messages.link3} /></LinkText>
            </LinkGroup>
          </MenuItem>
          <MenuItem id="contact" to="/contact" activeClassName="active-link" onMouseOver={this.captureHoveredLocation} onFocus={this.captureHoveredLocation} onMouseOut={this.resetHoveredLocation}>
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
