import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route } from 'react-router-dom';

import AboutPage from 'containers/AboutPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import ProjectsPage from 'containers/ProjectsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// import { fadeIn } from 'utils/keyFrames';
// import { paperShadow } from 'utils/componentStyles';

export class ContentRouter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // shouldComponentUpdate(nextProps) {
  //   console.log('<ContentRouter />     SCU!');     //  eslint-disable-line no-console
  //   console.log('<ContentRouter />     SCU    nextProps: ', nextProps);     //  eslint-disable-line no-console
  //   if (this.props.location !== nextProps.location) return true;
  //   return false;
  // }

  render() {
    const Wrapper = styled.main`
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      overflow: auto;
      height: 100%;
      width: 100%;
    `;

    return (
      <TransitionGroup component={Wrapper}>
        <CSSTransition
          key={this.props.location.key}
          classNames="fade"
          timeout={{ enter: 10000, exit: 10000 }}
        >
          {(state) => {
            console.log(this.props.location.pathname, '<ContentRouter />     CSSTransition    state: ', state);
            return (
              <Switch location={this.props.location}>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/projects" component={ProjectsPage} />
                <Route component={NotFoundPage} />
              </Switch>
            );
          }}
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

ContentRouter.propTypes = {
  location: PropTypes.object,
};

export default ContentRouter;
