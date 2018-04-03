
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
  const menuItem = CrossMenuContainer.querySelectorAll('.menu-item');
  const bulletLinks = CrossMenuContainer.querySelectorAll('.bullet-link');
  const bullet1 = CrossMenuContainer.querySelector('#bullet-link-1');
  const bullet2 = CrossMenuContainer.querySelector('#bullet-link-2');
  const bullet3 = CrossMenuContainer.querySelector('#bullet-link-3');
  const bullet4 = CrossMenuContainer.querySelector('#bullet-link-4');
  const linkGroups = CrossMenuContainer.querySelectorAll('.link-group');
  const linkTexts = CrossMenuContainer.querySelectorAll('.link-text');
  console.log('Sanity:minimize    called!', menuItems);
  new TimelineLite()
  // .fromTo(menuItems, 7000, { background: 'pink' }, { background: 'red' });
  // .from(CrossMenuContainer, 0.2, {
  //   background: '#000',
  // })
  // .from(linkGroups, 1, {
  //   maxWidth: '100px',
  //   maxHeight: '100px',
  // })

  //  Animation sequence #1
  // .to(menuItems, 2, {
  //   rotation: 45,
  // })
  .to(linkTexts, 1, {
    autoAlpha: 0,
  })
  .to(menuItems, 1, {
    scale: 0.10,
    rotation: 45,
  // })
  // }, 0)
  }, '-=1')

  .to(menuItems, 0.3, {
    // scale: 0.10,
    // rotation: 45,
    x: 290,
    y: 0,
    ease: Sine.easeOut,
  // }, 0.3)
  }, '+=0.1')
  // })
  .to(menuItem, 0.3, {
    background: '#000',
    // background: '#000',
  // }, 1.3)
  })

  .set(menuItems, {
  // .to(menuItems, 1, {
    justifyContent: 'space-around',
  })
  .to(menuItem, 0.3, {
    // background: '#000',
    width: '45%',
    height: '45%',
    onComplete: () => console.log('Minimized!'),
  // }, '+=0.5')
  });

  // .to(linkGroups, 3, {
  //   right: '50%',
  //   top: '50%',
  //   transform: 'translate(-50%, -50%)',
  // }, '-=3')
  // .to(bulletLinks, 3, {
  //   scale: 4,
  // }, '-=3')
  // .staggerTo([bullet1, bullet2, bullet3, bullet4], 1.5, { rotation: 0 }, 0.25);
};

const maximize = (CrossMenuContainer) => {
  const menuItems = CrossMenuContainer.querySelector('.menu-items');
  console.log('Sanity:maximize    called!', menuItems);
  const linkTexts = CrossMenuContainer.querySelectorAll('.link-text');
  new TimelineLite()
  // .from(menuItems, 3, {
  //   left: 'auto',
  //   top: 'auto',
  // })
  // .from(menuItems, 3, {
  //   bottom: '50px',
  //   right: '50px',
  // })
  .from(menuItems, 3, {
    maxWidth: '10px',
    maxHeight: '10px',
    // ease: Elastic.easeOut,
  })
};

export class CrossMenu extends React.PureComponent {
  // componentWillReceiveProps(nextProps) {
  //   console.log('nextProps.active: ', nextProps.active);
  //   if (nextProps.active !== this.props.active) {
  //     if (nextProps.active) {
  //       maximize(ReactDOM.findDOMNode(this.wrapper));
  //     } else {
  //       minimize(ReactDOM.findDOMNode(this.wrapper));
  //     }
  //   }
  // }

  render() {
    const expanded = this.props.active;
    console.log(expanded ? 'EXPANDED' : 'MINIMIZED');
    console.log('<CrossMenu />     rendered!');
    return (
      <CSSTransition
        // in={this.props.active}
        in
        timeout={1}
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
          if (expanded) {
            minimize(ReactDOM.findDOMNode(this.wrapper));     //  Make it a class method instead, that is called anytime props.active changes
          } else {
            maximize(ReactDOM.findDOMNode(this.wrapper));     //  Make it a class method instead, that is called anytime props.active changes
          }
        }}
        onExited={() => {
          console.log('<CrossMenu /> Exited!');
        }}
      >
        {(state) => {
          console.log('state: ', state);
          return (
            <Wrapper className={`cross-menu-${state}`} expanded={this.props.active} self={this}>
              <MenuItems>
                <MenuItem id="about" className="menu-item" to="/about" activeClassName="active-link" onMouseEnter={() => this.props.captureHoveredLocation('about')} onMouseLeave={this.props.resetHoveredLocation} onFocus={() => this.props.captureHoveredLocation('about')}>
                  <LinkGroup>
                    <Bullet id="bullet-link-1" ref={() => console.log('ref attached') } right />
                    <LinkText><FormattedMessage {...messages.link1} /></LinkText>
                  </LinkGroup>
                </MenuItem>
                <MenuItem id="projects" className="menu-item" to="/projects" activeClassName="active-link" onMouseEnter={() => this.props.captureHoveredLocation('projects')} onMouseLeave={this.props.resetHoveredLocation} onFocus={() => this.props.captureHoveredLocation('projects')}>
                  <LinkGroup>
                    <Bullet id="bullet-link-2" ref={() => console.log('ref attached') } left />
                    <LinkText><FormattedMessage {...messages.link2} /></LinkText>
                  </LinkGroup>
                </MenuItem>
                <MenuItem id="blog" className="menu-item" to="/blog" activeClassName="active-link" onMouseEnter={() => this.props.captureHoveredLocation('blog')} onMouseLeave={this.props.resetHoveredLocation} onFocus={() => this.props.captureHoveredLocation('blog')}>
                  <LinkGroup>
                    <Bullet id="bullet-link-3" ref={() => console.log('ref attached') } right />
                    <LinkText><FormattedMessage {...messages.link3} /></LinkText>
                  </LinkGroup>
                </MenuItem>
                <MenuItem id="contact" className="menu-item" to="/contact" activeClassName="active-link" onMouseEnter={() => this.props.captureHoveredLocation('contact')} onMouseLeave={this.props.resetHoveredLocation} onFocus={() => this.props.captureHoveredLocation('contact')}>
                  <LinkGroup>
                    <Bullet id="bullet-link-4" ref={() => console.log('ref attached') } left />
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
