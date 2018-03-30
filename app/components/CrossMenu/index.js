import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Bullet from './Bullet';
import LinkGroup from './LinkGroup';
import LinkText from './LinkText';
import MenuItem from './MenuItem';
import MenuItems from './MenuItems';
import Wrapper from './Wrapper';
import messages from './messages';

export class CrossMenu extends React.PureComponent {
  render() {
    console.log('<CrossMenu />     rendered!');
    return (
      <Wrapper active={this.props.active}>
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
      </Wrapper>
    );
  }
}

CrossMenu.propTypes = {
  active: PropTypes.bool,
  captureHoveredLocation: PropTypes.func,
  resetHoveredLocation: PropTypes.func,
};

export default CrossMenu;
