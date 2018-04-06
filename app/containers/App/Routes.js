import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// const headerNode = document.getElementById('app');
// const headerNode = document.getElementById('header-root');
// console.log('headerNode: ', headerNode);

// const RoutesPrimitive = styled.main``;

export class PortalWrapper extends React.PureComponent {    //  eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.el = document.createElement('div');
  }

  componentDidMount() {
    const headerRoot = document.getElementById('header-root');
    headerRoot.appendChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

PortalWrapper.propTypes = {
  children: PropTypes.any,
};

export class Routes extends React.PureComponent {    //  eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <PortalWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </PortalWrapper>
    );
  }
}

export default Routes;
