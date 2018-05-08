import React from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLocation } from 'containers/App/selectors';
import { changeLocale } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';

// import MaterialIcon from 'components/MaterialIcon';
// import FlagIcon from 'components/FlagIcon';
// import Eyebrow from 'components/Eyebrow';
// import SideSocialIcons from 'components/SideSocialIcons';

import CrossMenu from 'components/CrossMenu';
import BackgroundText from 'components/BackgroundText';

import ContentRouter from 'containers/ContentRouter';

// import A from './A';
import HeaderSocialIcon from './HeaderSocialIcon';
import AppWrapper from './AppWrapper';
import CrumbBackSlash from './CrumbBackSlash';
// import Content from './Content';
// import ContentRouter from './ContentRouter';
import CrumbCurrent from './CrumbCurrent';
import CrumbNext from './CrumbNext';
// import Footer from './Footer';
// import Header from './Header';
import Button from './Button';
// import TestButton from './TestButton';
import HeaderBreadCrumb from './HeaderBreadCrumb';
import HeaderSocials from './HeaderSocials';
// import HeaderLangBar from './HeaderLangBar';
import HeaderLogo from './HeaderLogo';
// import HeaderTitle from './HeaderTitle';
import HomeNavLink from './HomeNavLink';

// import messages from './messages';

//  NOTE: returns a bool that will determine whether to invert the breadcrumb or not.
const breadCrumbInvertState = (currentPath) => {
  //  NOTE: do NOT invert for following paths
  console.log('breadCrumbInvertState    currentPath: ', currentPath);
  const invertDict = {
    '/about': true,
    '/projects': true,
    '/contact': true,
  };
  console.log('breadCrumbInvertState    invertDict[currentPath]: ', invertDict[currentPath]);
  return invertDict[currentPath];
};

// export function App(props) {
export class App extends React.PureComponent {
  state = {
    hoveredLocation: '',
    expanded: false,
  }

  componentDidMount() {
    // this.aos = AOS;
    // console.log('this.aos: ', this.aos);
    // this.aos.init();
    AOS.init();
    window.addEventListener('load', () => {
      // console.log('Sanity:load', AOS.refresh);
      AOS.refresh();
    });
    // window.addEventListener('load', AOS.refresh());
  }

  // componentDidUpdate() {
  //   // this.aos.refresh();
  //   AOS.refresh()
  // }

  componentWillReceiveProps(nextProps) {
    console.log('<App />    CRWP!');
    //  NOTE: clears the hover, when coming from active Menu to inactive (via selecting a route).
    if (nextProps.location.pathname.slice(1) === this.state.hoveredLocation) this.resetHoveredLocation();

    // //  NOTE: when home, have menu expanded
    // if (nextProps.location.pathname === '/') this.setState({ expanded: true });

    console.log('<App />    CRWP    nextProps: ', nextProps);
    if (nextProps.locale !== this.props.locale) console.log('<App />    CRWP    locale changed!');
    if (nextProps.location !== this.props.location) console.log('<App />    CRWP    location changed!');
  }

  // //  NOTE: isnt' called when changing localeLang, but called for state changes (expanded)
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('<App />    SCU    nextProps: ', nextProps);
  //   console.log('<App />    SCU    nextState: ', nextState);
  //   if (nextProps.locale !== this.props.locale) console.log('<App />    SCU    locale changed!');    //  note called
  //   if (nextProps.location !== this.props.location) console.log('<App />    SCU    location changed!');    //  note called
  //   return true;
  // }

  //  NOTE: component unmounts when props for location changes..........
  //  NOTE: This is becuase of react-intl
  componentWillUnmount() {
    console.log('<App />     CWU!');     //  eslint-disable-line no-console
  }

  resetHoveredLocation = () => {
    this.setState({
      hoveredLocation: '',
    });
  }

  captureHoveredLocation = (location) => {
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

  expandMenu = () => {
    //  NOTE: First, animate out the page overlay, than animate in the menu.
    //        Change the CSS class and add an animation in.
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    //  TODO: ⭐ Abstract out each link into an array and map out the elements instead of repetition. In HeaderLang

    //  NOTE: if on home page, render landing style menu. Through className, or render separate component.
    //  If I render separate component, will this affect the css transitions? I will have to depend on react-transition-group for the render
    //  Also having the component will unmount, and the other will have to mount. No way to link the two for a smooth `transition`
    // console.log('App    this.props.location.pathname: ', this.props.location.pathname);

    const { location } = this.props;
    console.log('<App />     rendered!');     //  eslint-disable-line no-console
    // console.log('<App />     this.state.expanded: ', this.state.expanded);     //  eslint-disable-line no-console
    console.log('<App />     this.props.location', this.props.location);    //  eslint-disable-line no-console

    return (
      <AppWrapper>
        {/* <Header id="header-root"></Header> */}
        {/* <HeaderTitle>Web Dev</HeaderTitle> */}
        {/* <HeaderTitle><Eyebrow animate /></HeaderTitle> */}

        <BackgroundText />

        <HeaderLogo inverted={location.pathname !== '/'} to="/" activeClassName="active-link">R</HeaderLogo>
        {/* <HeaderLogo inverted={location.pathname !== '/'}><HomeNavLink to="/" activeClassName="active-link">R</HomeNavLink></HeaderLogo> */}

        <HeaderBreadCrumb inverted={breadCrumbInvertState(location.pathname)} strikeThrough={this.state.hoveredLocation.length > 0}>
          <CrumbBackSlash />
          <CrumbCurrent>{`${location.pathname.slice(1)}`}</CrumbCurrent>
          <CrumbNext>{this.state.hoveredLocation && this.state.hoveredLocation}</CrumbNext>
        </HeaderBreadCrumb>

        <HeaderSocials>
          <HeaderSocialIcon role="button" tabIndex={0} target="_blank" href="https://github.com/nemsae"><span><i className="fab fa-github fa-lg" /></span></HeaderSocialIcon>
          <HeaderSocialIcon role="button" tabIndex={0} target="_blank" href="https://www.linkedin.com/in/jaysonder"><span><i className="fab fa-linkedin-in fa-lg" /></span></HeaderSocialIcon>
          <HeaderSocialIcon role="button" tabIndex={0}><span><i className="far fa-file-alt fa-lg" /></span></HeaderSocialIcon>
        </HeaderSocials>
        {/* <HeaderLangBar>
          <A isActive={this.props.locale === 'en'} role="button" tabIndex={0} onClick={() => this.props.changeLocaleLang('en')}><span>EN</span></A>
          <A isActive={this.props.locale === 'es'} role="button" tabIndex={0} onClick={() => this.props.changeLocaleLang('es')}><span>ES</span></A>
          <A isActive={this.props.locale === 'ko'} role="button" tabIndex={0} onClick={() => this.props.changeLocaleLang('ko')}><span>KO</span></A>
        </HeaderLangBar> */}

        {/* NOTE: I need to animate menu style change, after wrappers pushed */}
        <CrossMenu
          active={this.state.expanded}
          captureHoveredLocation={this.captureHoveredLocation}
          resetHoveredLocation={this.resetHoveredLocation}
        />

        <Button onClick={this.expandMenu}>{ this.state.expanded ? 'Minimize' : 'Maximize' }</Button>

        {/* NOTE: I need to push out wrappers here */}
        <ContentRouter isMenuActive={this.state.expanded} />
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
