
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
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
import messages from './messages';

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

  componentDidUpdate(prevProps, prevState) {
    let wrapperNode;
    if (prevProps.active === true && this.props.active === false) {
      console.log('Sanity:MINIMIZE', this.wrapper);
      wrapperNode = ReactDOM.findDOMNode(this.wrapper);     //  eslint-disable-line react/no-find-dom-node
      Animations.minimizeWrapper(wrapperNode);
      console.log('wrapperNode: ', wrapperNode);
    } else if (prevProps.active === false && this.props.active === true) {
      console.log('Sanity:MAXIMIZE', this.wrapper);
      wrapperNode = ReactDOM.findDOMNode(this.wrapper);     //  eslint-disable-line react/no-find-dom-node
      Animations.maximizeWrapper(wrapperNode);
      console.log('wrapperNode: ', wrapperNode);
    }
  }

  // wrapperRef = React.createRef();

  render() {
    // const expanded = this.props.active;
    // console.log(expanded ? 'EXPANDED' : 'MINIMIZED');
    console.log('<CrossMenu />     rendered!');     //  eslint-disable-line no-console
    return (
      <CSSTransition
        // in={this.props.active}
        in
        timeout={1}
        classNames="cross-menu"
        appear
        unmountOnExit
        onEnter={() => {
          // console.log('<CrossMenu /> Enter!');
        }}
        onEntering={() => {
          // console.log('<CrossMenu /> Entering!');
        }}
        onEntered={() => {
          // console.log('<CrossMenu /> Entered!');

          //  Make it a class method instead, that is called anytime props.active changes
          // if (expanded) {
          //   minimize(ReactDOM.findDOMNode(this.wrapper));     //  eslint-disable-line react/no-find-dom-node
          // } else {
          //   maximize(ReactDOM.findDOMNode(this.wrapper));     //  eslint-disable-line react/no-find-dom-node
          // }
        }}
        onExited={() => {
          // console.log('<CrossMenu /> Exited!');
        }}
      >
        {(state) => {     //  eslint-disable-line arrow-body-style
          // console.log('state: ', state);
          return (
            <Wrapper className={`cross-menu-${state}`} active={this.props.active} self={this}>
            {/* <Wrapper className={`cross-menu-${state}`} expanded={this.props.active} self={this}> */}
              <MenuItems>
                <MenuItem id="about" className="menu-item" to="/about" activeClassName="active-link" onMouseEnter={() => this.props.captureHoveredLocation('about')} onMouseLeave={this.props.resetHoveredLocation} onFocus={() => this.props.captureHoveredLocation('about')}>
                  <LinkGroup>
                    <Bullet id="bullet-link-1" right />
                    <LinkText><FormattedMessage {...messages.link1} /></LinkText>
                  </LinkGroup>
                </MenuItem>
                <MenuItem id="projects" className="menu-item" to="/projects" activeClassName="active-link" onMouseEnter={() => this.props.captureHoveredLocation('projects')} onMouseLeave={this.props.resetHoveredLocation} onFocus={() => this.props.captureHoveredLocation('projects')}>
                  <LinkGroup>
                    <Bullet id="bullet-link-2" left />
                    <LinkText><FormattedMessage {...messages.link2} /></LinkText>
                  </LinkGroup>
                </MenuItem>
                <MenuItem id="blog" className="menu-item" to="/blog" activeClassName="active-link" onMouseEnter={() => this.props.captureHoveredLocation('blog')} onMouseLeave={this.props.resetHoveredLocation} onFocus={() => this.props.captureHoveredLocation('blog')}>
                  <LinkGroup>
                    <Bullet id="bullet-link-3" right />
                    <LinkText><FormattedMessage {...messages.link3} /></LinkText>
                  </LinkGroup>
                </MenuItem>
                <MenuItem id="contact" className="menu-item" to="/contact" activeClassName="active-link" onMouseEnter={() => this.props.captureHoveredLocation('contact')} onMouseLeave={this.props.resetHoveredLocation} onFocus={() => this.props.captureHoveredLocation('contact')}>
                  <LinkGroup>
                    <Bullet id="bullet-link-4" left />
                    <LinkText><FormattedMessage {...messages.link4} /></LinkText>
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
