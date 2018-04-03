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
import StyledCSSTransition from './StyledCSSTransition';
import Wrapper from './Wrapper';
import messages from './messages';

// const animateIn = (gridContainer) => {
//   const cards = gridContainer.querySelectorAll('.card')
//   new TimelineLite()
//   .fromTo(gridContainer, animationTimings.gridEnter / 1000, {x: -2000}, {x: 0, ease: Elastic.easeOut})
//   .staggerFromTo(cards, animationTimings.cardEnter / 1000, {autoAlpha: 0, y: -30}, {autoAlpha: 1, y: 0}, 0.1)
// }

const minimize = (CrossMenuContainer) => {
  const menuItems = CrossMenuContainer.querySelector('.menu-items');
  console.log('Sanity:minimize    called!', menuItems);
  new TimelineLite()
  // .fromTo(menuItems, 7000, { background: 'pink' }, { background: 'red' });
  .from(menuItems, 1, {
    maxWidth: '100px',
    maxHeight: '100px',
    bottom: 'auto',
    right: 'auto',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  });
};

const maximize = (CrossMenuContainer) => {
  const menuItems = CrossMenuContainer.querySelector('.menu-items');
  console.log('Sanity:maximize    called!', menuItems);
  const linkTexts = CrossMenuContainer.querySelectorAll('.link-text');
  new TimelineLite()
  .from(menuItems, 3, {
    left: 'auto',
    top: 'auto',
  })
  .from(menuItems, 3, {
    bottom: '50px',
    right: '50px',
  })
  .from(menuItems, 3, {
    maxWidth: '10px',
    maxHeight: '10px',
    // ease: Elastic.easeOut,
  })
};

export class CrossMenu extends React.PureComponent {
  componentWillReceiveProps(nextProps) {
    console.log('nextProps.active: ', nextProps.active);
    if (nextProps.active !== this.props.active) {
      if (nextProps.active) {
        maximize(ReactDOM.findDOMNode(this.wrapper));
      } else {
        minimize(ReactDOM.findDOMNode(this.wrapper));
      }
    }
  }

  render() {
    const expanded = this.props.active;
    console.log(expanded ? 'EXPANDED' : 'MINIMIZED');
    console.log('<CrossMenu />     rendered!');
    return (
      <CSSTransition
        // in={this.props.active}
        in
        timeout={200}
        classNames="cross-menu"
        appear
        unmountOnExit
        onEnter={() => {
          console.log('<CrossMenu /> Enter!');
        }}
        onEntering={() => {
          console.log('<CrossMenu /> Entering!');
        }}
        onEntered={() => {
          console.log('<CrossMenu /> Entered!');
          // if (expanded) {
          //   maximize(ReactDOM.findDOMNode(this.wrapper));
          // } else {
          //   minimize(ReactDOM.findDOMNode(this.wrapper));
          // }
        }}
        onExited={() => {
          console.log('<CrossMenu /> Exited!');
        }}
      >
        {(state) => {
          console.log('state: ', state);
          return (
            <Wrapper className={`cross-menu-${state}`} expanded={this.props.active} self={this}>
              <CSSTransition
                // in={this.props.active}
                in
                timeout={400}
                classNames="menu-items"
                appear
                // unmountOnExit
                onEnter={() => {
                  // console.log('<MenuItems /> Enter!');
                }}
                onEntering={() => {
                  // console.log('<MenuItems /> Entering!');
                }}
                onEntered={() => {
                  // console.log('<MenuItems /> Entered!');
                }}
                onExited={() => {
                  // console.log('<MenuItems /> Exited!');
                }}
              >
                {(state) => {
                  // console.log('state: ', state);
                  return (
                    <MenuItems>
                      <MenuItem id="about" to="/about" activeClassName="active-link" onMouseEnter={() => this.props.captureHoveredLocation('about')} onMouseLeave={this.props.resetHoveredLocation} onFocus={() => this.props.captureHoveredLocation('about')}>
                        <LinkGroup>
                          <Bullet right />
                          <LinkText><FormattedMessage {...messages.link1} /></LinkText>
                        </LinkGroup>
                      </MenuItem>
                      <MenuItem id="projects" to="/projects" activeClassName="active-link" onMouseEnter={() => this.props.captureHoveredLocation('projects')} onMouseLeave={this.props.resetHoveredLocation} onFocus={() => this.props.captureHoveredLocation('projects')}>
                        <LinkGroup>
                          <Bullet left />
                          <LinkText><FormattedMessage {...messages.link2} /></LinkText>
                        </LinkGroup>
                      </MenuItem>
                      <MenuItem id="blog" to="/blog" activeClassName="active-link" onMouseEnter={() => this.props.captureHoveredLocation('blog')} onMouseLeave={this.props.resetHoveredLocation} onFocus={() => this.props.captureHoveredLocation('blog')}>
                        <LinkGroup>
                          <Bullet right />
                          <LinkText><FormattedMessage {...messages.link3} /></LinkText>
                        </LinkGroup>
                      </MenuItem>
                      <MenuItem id="contact" to="/contact" activeClassName="active-link" onMouseEnter={() => this.props.captureHoveredLocation('contact')} onMouseLeave={this.props.resetHoveredLocation} onFocus={() => this.props.captureHoveredLocation('contact')}>
                        <LinkGroup>
                          <Bullet left />
                          <LinkText><FormattedMessage {...messages.link4} /></LinkText>
                        </LinkGroup>
                      </MenuItem>
                    </MenuItems>
                  );
                }}
              </CSSTransition>
            </Wrapper>
          )
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
