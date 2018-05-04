import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withRouter, Switch, Route } from 'react-router-dom';

import AboutPage from 'containers/AboutPage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import ProjectsPage from 'containers/ProjectsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import SwitchWrapper from './SwitchWrapper';
import AnimationWrapper, { aniEnterTime, aniExitTime } from './AnimationWrapper';

//  NOTE: This returns a childFactory to provide to TransitionGroup, this allows us to pass updated props
//  to children that has already "left" the DOM, but is still contained in state of TransitionGroup.
const childFactoryCreator = (location) => (
  (child) => {
    const childKey = child.key.split('$')[1];
    let showState = true;
    if (childKey !== location.key) {
      showState = false;
    }
    return (
      React.cloneElement(child, {
        // classNames,
        in: showState,
      })
    );
  }
);

//  NOTE: this fxn willl return the corresponding CSS classname to <CSSTransition />
const createAnimationClassName = (newLocation) => {
  switch (newLocation) {
    case '/': return 'home-page';
    case '/about': return 'about-page';
    case '/projects': return 'projects-page';
    case '/contact': return 'contact-page';
    default:
      return 'not-found-page';
  }
};

export class ContentRouter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('<ContentRouter />     rendered!');    //  eslint-disable-line no-console
    // console.log('<ContentRouter />     this.props.location.pathname', this.props.location.pathname);    //  eslint-disable-line no-console
    // console.log('<ContentRouter />     this.state.transitionState', this.state.transitionState);    //  eslint-disable-line no-console
    const { location } = this.props;
    return (
      <TransitionGroup
        component={AnimationWrapper}
        childFactory={childFactoryCreator(location)}
      >
        <CSSTransition
          key={location.key}
          // classNames="entering-child"
          classNames={createAnimationClassName(location.pathname)}
          timeout={{ enter: aniEnterTime, exit: aniExitTime }}
          unmountOnExit   //  NOTE: when false, does not delete previously mounted components, DOM memory leak
          appear
          // in
          // in={false}
          // in={this.state.transitionState}
          // mountOnEnter
        >
          <SwitchWrapper>
            <Switch location={location}>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </SwitchWrapper>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

ContentRouter.propTypes = {
  location: PropTypes.object.isRequired,
  // match: PropTypes.object.isRequired,
  // history: PropTypes.object.isRequired,
};

//  NOTE: withRouter provides <Switch /> and <Route /> with immutable `location`, not live/mutable history.location
export default withRouter(ContentRouter);
