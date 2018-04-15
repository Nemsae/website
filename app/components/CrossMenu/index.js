import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import { CSSTransition } from 'react-transition-group';
import 'gsap/TweenLite';
import 'gsap/CSSPlugin';
import 'gsap/EasePack';
import 'gsap/TimelineLite';

import Bullet from './Bullet';
import LinkGroup from './LinkGroup';
import LinkText from './LinkText';
import MenuItem from './MenuItem';
import MenuItems from './MenuItems';
import Wrapper from './Wrapper';
// import messages from './messages';

import Animations from './Animations';

// const animateIn = (gridContainer) => {
//   const cards = gridContainer.querySelectorAll('.card')
//   new TimelineLite()
//   .fromTo(gridContainer, animationTimings.gridEnter / 1000, {x: -2000}, {x: 0, ease: Elastic.easeOut})
//   .staggerFromTo(cards, animationTimings.cardEnter / 1000, {autoAlpha: 0, y: -30}, {autoAlpha: 1, y: 0}, 0.1)
// }

export class CrossMenu extends React.PureComponent {
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.active === true && this.props.active === false) {
  //     console.log('Sanity:MAXIMIZE');
  //     maximize(ReactDOM.findDOMNode(this.wrapper));     //  eslint-disable-line react/no-find-dom-node
  //   } else if (nextProps.active === false && this.props.active === true) {
  //     console.log('Sanity:MINIMIZE');
  //     minimize(ReactDOM.findDOMNode(this.wrapper));     //  eslint-disable-line react/no-find-dom-node
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    // console.log('<CrossMenu />    CWRP');
    if (nextProps.active !== this.props.active) console.log('<CrossMenu />    CWRP     active changed');
    // console.log('<CrossMenu />    CWRP     nextProps: ', nextProps);
  }

  //  NOTE: commented out, because on hover over menu-item will trigger re render with SCU => true
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('<CrossMenu />    SCU');
  //   if (nextProps.active !== this.props.active) console.log('<CrossMenu />    SCU    active changed!');
  //   if (nextProps.captureHoveredLocation !== this.props.captureHoveredLocation) console.log('<CrossMenu />    SCU    captureHoveredLocation changed!');
  //   if (nextProps.resetHoveredLocation !== this.props.resetHoveredLocation) console.log('<CrossMenu />    SCU    resetHoveredLocation changed!');
  //   // console.log('SCU    nextProps: ', nextProps);
  //   // //  NOTE: prevent re render when changing language
  //   // if (nextProps.active === this.props.active) return false;
  //   return true;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('<CrossMenu />     CDU!');     //  eslint-disable-line no-console
  //
  //   let wrapperNode;
  //   if (prevProps.active === true && this.props.active === false) {
  //     console.log('Minimize     started!')
  //     // console.log('Sanity:MINIMIZE', this.wrapper);
  //     wrapperNode = ReactDOM.findDOMNode(this.wrapper);     //  eslint-disable-line react/no-find-dom-node
  //     Animations.minimizeWrapper(wrapperNode);
  //   } else if (prevProps.active === false && this.props.active === true) {
  //     console.log('Maximize     started!')
  //     // console.log('Sanity:MAXIMIZE', this.wrapper);
  //     wrapperNode = ReactDOM.findDOMNode(this.wrapper);     //  eslint-disable-line react/no-find-dom-node
  //     Animations.maximizeWrapper(wrapperNode);
  //   }
  // }

  //  NOTE: component unmounts when parent props for location changes..........
  componentWillUnmount() {
    console.log('<CrossMenu />     CWU!');     //  eslint-disable-line no-console
  }

  // wrapperRef = React.createRef();

  render() {
    console.log('<CrossMenu />     rendered!');     //  eslint-disable-line no-console
    // console.log('<CrossMenu />     this.props.active: ', this.props.active);     //  eslint-disable-line no-console
    // console.log('<CrossMenu />     Wrapper: ', Wrapper);     //  eslint-disable-line no-console
    return (
      <CSSTransition
        in={this.props.active}
        timeout={15000}
        classNames="menu-overlay"
        onEntering={() => {
          console.log('CSSTransition      action:     Entering');
          // console.log('CSSTransition      this.wrapper', this.wrapper);
          // console.log('CSSTransition      ReactDOM.findDOMNode', ReactDOM.findDOMNode(this.wrapper));
          // Animations.maximizeWrapper(ReactDOM.findDOMNode(this.wrapper));     //  eslint-disable-line react/no-find-dom-node
        }}
        onExiting={() => {
          console.log('CSSTransition      action:     Exiting');
          // console.log('CSSTransition      this.wrapper', this.wrapper);
          // console.log('CSSTransition      ReactDOM.findDOMNode', ReactDOM.findDOMNode(this.wrapper));
          // Animations.minimizeWrapper(ReactDOM.findDOMNode(this.wrapper));     //  eslint-disable-line react/no-find-dom-node
        }}
      >
        {(state) => {
          console.log('CSSTransition    state: ', state);
          return (
            <Wrapper className={`cross-menu-${1}`} active={this.props.active} self={this}>
              {/* <Wrapper className={`cross-menu-${state}`} expanded={this.props.active} self={this}> */}
              <MenuItems>
                <MenuItem id="about" className="menu-item" to="/about" activeClassName="active-link" onMouseEnter={() => this.props.captureHoveredLocation('about')} onMouseLeave={this.props.resetHoveredLocation} onFocus={() => this.props.captureHoveredLocation('about')}>
                  <LinkGroup>
                    <Bullet id="bullet-link-1" right />
                    <LinkText id="1" />
                    {/* <LinkText active={this.props.active}><FormattedMessage {...messages.link1} /></LinkText> */}
                  </LinkGroup>
                </MenuItem>
                <MenuItem id="projects" className="menu-item" to="/projects" activeClassName="active-link" onMouseEnter={() => this.props.captureHoveredLocation('projects')} onMouseLeave={this.props.resetHoveredLocation} onFocus={() => this.props.captureHoveredLocation('projects')}>
                  <LinkGroup>
                    <Bullet id="bullet-link-2" left />
                    <LinkText id="2" />
                    {/* <LinkText active={this.props.active}><FormattedMessage {...messages.link2} /></LinkText> */}
                  </LinkGroup>
                </MenuItem>
                <MenuItem id="blog" className="menu-item" to="/blog" activeClassName="active-link" onMouseEnter={() => this.props.captureHoveredLocation('blog')} onMouseLeave={this.props.resetHoveredLocation} onFocus={() => this.props.captureHoveredLocation('blog')}>
                  <LinkGroup>
                    <Bullet id="bullet-link-3" right />
                    <LinkText id="3" />
                    {/* <LinkText active={this.props.active}><FormattedMessage {...messages.link3} /></LinkText> */}
                  </LinkGroup>
                </MenuItem>
                <MenuItem id="contact" className="menu-item" to="/contact" activeClassName="active-link" onMouseEnter={() => this.props.captureHoveredLocation('contact')} onMouseLeave={this.props.resetHoveredLocation} onFocus={() => this.props.captureHoveredLocation('contact')}>
                  <LinkGroup>
                    <Bullet id="bullet-link-4" left />
                    <LinkText id="4" />
                    {/* <LinkText active={this.props.active}><FormattedMessage {...messages.link4} /></LinkText> */}
                  </LinkGroup>
                </MenuItem>
              </MenuItems>
            </Wrapper>
          );
        }}
      </CSSTransition>
    );
  }
}

CrossMenu.propTypes = {
  active: PropTypes.bool,
  captureHoveredLocation: PropTypes.func,
  resetHoveredLocation: PropTypes.func,
};

export default CrossMenu;
