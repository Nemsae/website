
import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { makeSelectLocation } from 'containers/App/selectors';
import { changeLocale } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';

// import MaterialIcon from 'components/MaterialIcon';
// import FlagIcon from 'components/FlagIcon';

import CrossMenu from 'components/CrossMenu';

import A from './A';
import AppWrapper from './AppWrapper';
import BackSlash from './BackSlash';
import Content from './Content';
import CrumbCurrent from './CrumbCurrent';
import CrumbNext from './CrumbNext';
// import Footer from './Footer';
import Header from './Header';
import HeaderBreadCrumb from './HeaderBreadCrumb';
import HeaderLangBar from './HeaderLangBar';
import HeaderLogo from './HeaderLogo';
// import HeaderTitle from './HeaderTitle';
// import HeaderBar from './HeaderBar';
// import H1 from './H1';
// import LangBar from './LangBar';
import HomeNavLink from './HomeNavLink';
// import StyledNavLink from './StyledNavLink';
// import P from './P';
// import HeaderLeft from './HeaderLeft';
// import HeaderRight from './HeaderRight';

// import messages from './messages';

const validRoutes = {
  '/': true,
  '/about': false,
  '/projects': false,
  '/blog': false,
  '/contact': false,
};

// export function App(props) {
export class App extends React.PureComponent {
  state = {
    hoveredLocation: '',
  }

  componentWillReceiveProps(nextProps) {
    //  NOTE: clears the hover, when coming from active Menu to inactive (via selecting a route).
    if (nextProps.location.pathname.slice(1) === this.state.hoveredLocation) this.resetHoveredLocation();
  }

  resetHoveredLocation = () => {
    this.setState({
      hoveredLocation: '',
    });
  }

  captureHoveredLocation = (location) => {
    //  BUG: issue with onMouseOver being triggered multiple times. Issue is most likely the event handler intereacting with child elements triggering it.
    //  resetHoveredLocation was being called because the mouse "left" from parent to inner child.
    //  Solution: use mouseEnter and mouseLeave instead of mouseHover and mouseOut

    //  BUG: issue with onMouseOver being triggered first on child element. Hence `location` is "" because no id.
    //  if event fires from child, check parent div for id then.
    //  Solution: instead of setting location from "id", pass as an argument and bind in render.

    //  BUG: re render of the menu items, because of the capture changing state.

    // const location = evt.target.id;
    // console.log('evt.target.attr: ', evt.target.attr);
    // console.log('evt.target.parentNode.className: ', evt.target.parentNode.className);
    // console.log('Sanity:captureHoveredLocation    called!     with location: ', location, '     and a previous location: ', this.state.hoveredLocation);
    if (location === '' || location === this.state.hoveredLocation || location === this.props.location.pathname.slice(1)) return;
    this.setState({
      hoveredLocation: location,
    });
  }

  render() {
    //  TODO: ⭐ Abstract out each link into an array and map out the elements instead of repetition. In HeaderLang

    //  NOTE: if on home page, render landing style menu. Through className, or render separate component.
    //  If I render separate component, will this affect the css transitions? I will have to depend on react-transition-group for the render
    //  Also having the component will unmount, and the other will have to mount. No way to link the two for a smooth `transition`
    // console.log('App    this.props.location.pathname: ', this.props.location.pathname);
    const isMenuActive = validRoutes[this.props.location.pathname] || false;
    return (
      <AppWrapper>

        <Header currentPath={this.props.location.pathname}>
          <HeaderLogo><HomeNavLink to="/" activeClassName="active-link">R</HomeNavLink></HeaderLogo>
          {/* <HeaderTitle>Web Dev</HeaderTitle> */}
          <HeaderBreadCrumb strikeThrough={this.state.hoveredLocation.length > 0}><BackSlash /><CrumbCurrent>{`${this.props.location.pathname.slice(1)}`}</CrumbCurrent><CrumbNext>{this.state.hoveredLocation && this.state.hoveredLocation}</CrumbNext></HeaderBreadCrumb>
          <HeaderLangBar>
            <A isActive={this.props.locale === 'en'} role="button" tabIndex={0} onClick={() => this.props.changeLocaleLang('en')}><span>EN</span></A>
            <A isActive={this.props.locale === 'es'} role="button" tabIndex={0} onClick={() => this.props.changeLocaleLang('es')}><span>ES</span></A>
            <A isActive={this.props.locale === 'ko'} role="button" tabIndex={0} onClick={() => this.props.changeLocaleLang('ko')}><span>KO</span></A>
          </HeaderLangBar>
          <CrossMenu
            active={isMenuActive}
            captureHoveredLocation={this.captureHoveredLocation}
            resetHoveredLocation={this.resetHoveredLocation}
          />
        </Header>

        <Content>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
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
