import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
// console.log('CSSTransitionGroup: ', CSSTransitionGroup);
// console.log('TransitionGroup: ', TransitionGroup);

import { Switch, Route } from 'react-router-dom';
// console.log('ReactCSSTransitionGroup: ', ReactCSSTransitionGroup);

import AboutPage from 'containers/AboutPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import ProjectsPage from 'containers/ProjectsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// import { fadeIn } from 'utils/keyFrames';
// import { paperShadow } from 'utils/componentStyles';

//  BUG: issue with exit timeout not being obeyed is because component re-renders with the new location.key,
//  BUG: Pages do unmount, but this component never does.

//  BUG: cWRP fires for every captureHoveredLocation, because props is passed an object, `location`

export class ContentRouter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // shouldComponentUpdate(nextProps) {
  //   console.log('<ContentRouter />     SCU!');     //  eslint-disable-line no-console
  //   console.log('<ContentRouter />     SCU    nextProps.location: ', nextProps.location);     //  eslint-disable-line no-console
  //   console.log(this.props.location.key !== nextProps.location.key);
  //   if (this.props.location.key !== nextProps.location.key) return true;
  //   return false;
  // }
  //

  state = { transitionState: false }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('<ContentRouter />     CWRP!');     //  eslint-disable-line no-console
    console.log('<ContentRouter />     nextProps.location: ', nextProps.location);
    if (nextProps.location.key !== this.props.location.key) {
      this.setState({ transitionState: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {     //  eslint-disable-line no-unused-vars
    console.log('<ContentRouter />     CDU!');     //  eslint-disable-line no-console
  }

  componentWillUnmount() {
    console.log('<ContentRouter />     CWU!');     //  eslint-disable-line no-console
  }

  render() {
    console.log('<ContentRouter />     rendered!');    //  eslint-disable-line no-console
    console.log('<ContentRouter />     this.props.location.key', this.props.location.key);    //  eslint-disable-line no-console
    const Wrapper = styled.main.attrs({ className: 'content-router' })`
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      overflow: auto;
      height: 100%;
      width: 100%;

      ${'' /* .route-fade-enter {
        opacity: 0.01;
      }
      .route-fade-enter-active {
        opacity: 1;
        transition: opacity 4000ms ease-in;
      }
      .route-fade-exit {
        opacity: 1;
      }
      .route-fade-exit-active {
        opacity: 0.01;
        transition: opacity 4000ms ease-in;
      } */}
    `;

    return (
      <TransitionGroup
        component={Wrapper}
      >
      {/* <CSSTransitionGroup
        component={Wrapper}
        className="route-fade"
        transitionName="route-fade"
        transitionEnterTimeout={4000}
        transitionLeaveTimeout={4000}
      > */}
        <CSSTransition
          key={this.props.location.key}
          classNames="route-fade"
          timeout={{ enter: 3000, exit: 3000 }}
          // timeout={4000}
          in={this.state.transitionState}
          // mountOnEnter
          unmountOnExit   //  NOTE: when false, does not delete previously mounted components, memory leak
          onEnter={console.log('onEnter: ', Date.now())}    //  BUG: Enter phase is near instant, and not adhering to enter timeout
          onEntering={console.log('onEntering: ', Date.now())}
          onEntered={console.log('onEntered: ', Date.now())}
          onExit={console.log('onExit: ', Date.now())}    //  BUG: Exit phase is near instant, and not adhering to exit timeout
          onExiting={console.log('onExiting: ', Date.now())}
          onExited={console.log('onExited: ', Date.now())}
        // >
        >{(status) => {
          console.log(this.props.location.pathname, '<ContentRouter />     CSSTransition    status: ', status);
          return (
            <Switch key={this.props.location.key} location={this.props.location}>
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
