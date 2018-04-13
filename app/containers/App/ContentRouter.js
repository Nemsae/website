import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withRouter, Switch, Route } from 'react-router-dom';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { fadeIn, fadeOut } from 'utils/keyFrames';

import AboutPage from 'containers/AboutPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import ProjectsPage from 'containers/ProjectsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// import { fadeIn } from 'utils/keyFrames';
// import { paperShadow } from 'utils/componentStyles';

//  BUG: issue with exit timeout not being obeyed is because component re-renders with the new location.key,
//  BUG: Pages do unmount, but this component never does.
//  BUG: cWRP fires for every captureHoveredLocation, because props is passed an object, `location`
//  BUG: React DOM, each <CSSTransition /> is not exiting, doesn't trigger exit
//       Solution?: key isn't changing. Therefore it won't leave?

//  NOTE: EXIT doesn't work when we pass component
//  <TransitionGroup
//    component={TransitionGroupWrapper}
//  >


//  This returns a childFactory to provide to TransitionGroup
const childFactoryCreator = (locationKey) => {
  console.log('locationKey: ', locationKey);
  return (
    (child) => {
      // console.log('child: ', child);
      const childKey = child.key.split('$')[1];
      // console.log('childKey: ', childKey);
      let showState = true;
      let classNames = 'entering-child';
      if (childKey !== locationKey) {
        showState = false;
        classNames = 'exiting-child';
      }
      return (
        React.cloneElement(child, {
          classNames,
          in: showState,
        })
      );
    }
  );
};

const SwitchWrapper = styled.main`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  overflow: auto;
  height: 100%;
  width: 100%;
`;

const ContentRouterWrapper = styled.div`
  .entering-child-enter, .entering-child-enter-active {
    .page-bookmark {
      transform: translate3d(0, 2000px, 0);
    }
    .page-content {
      transform: translate3d(2000px, 0, 0);
    }
  }
  .entering-child-enter-done {
    .page-bookmark {
      animation: ${fadeIn('bottom')} 1000ms var(--ease-in-out-quart);
    }
    .page-content {
      animation: ${fadeIn('right')} 1000ms 200ms both var(--ease-in-out-quart);
    }
  }
  .exiting-child-exit, .exiting-child-exit-active {
    .page-bookmark {
      animation: ${fadeOut('top')} 1000ms var(--ease-in-out-quart);
    }
    .page-content {
      animation: ${fadeOut('left')} 1000ms 400ms both var(--ease-in-out-quart);
    }
  }
  .exiting-child-exit-done {
    ${'' /* .page-bookmark {
      transform: translate3d(0, -2000px, 0);
    }
    .page-content {
      transform: translate3d(-2000px, 0, 0);
    } */}
  }
`;

export class ContentRouter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = { transitionState: false }

  componentWillReceiveProps(nextProps, nextState) {
    // console.log('<ContentRouter />     CWRP!');     //  eslint-disable-line no-console
    // console.log(nextProps.location === this.props.location, '<ContentRouter />     nextProps', nextProps);    //  eslint-disable-line no-console
    // console.log(this.state.transitionState, '<ContentRouter />     nextProps.location: ', nextProps.location);
    if (nextProps.location !== this.props.location) {
      //  Here the location/route changed. We need to set `in` as false to trigger exit animation
      console.log('transitionState now ', !this.state.transitionState);
      // this.setState({ transitionState: !this.state.transitionState });
      //  previousKey is so we can compare the new location.key with the previous one, so we can change `in` for previous node
      // this.setState({
      //   transitionState: false,
      //   previousKey: this.props.location.key,
      // });
    }
  }

  //  NOTE: SCU working as intended
  // shouldComponentUpdate(nextProps) {
  //   console.log('<ContentRouter />     SCU!');     //  eslint-disable-line no-console
  //   console.log(this.props.location.key !== nextProps.location.key, '<ContentRouter />     SCU    nextProps.location: ', nextProps.location);     //  eslint-disable-line no-console
  //   if (this.props.location.key !== nextProps.location.key) return true;
  //   return false;
  // }
  //

  componentDidUpdate(prevProps, prevState) {     //  eslint-disable-line no-unused-vars
    console.log('<ContentRouter />     CDU!');     //  eslint-disable-line no-console
    // this.setState({ transitionState: true });
  }

  componentWillUnmount() {
    console.log('<ContentRouter />     CWU!');     //  eslint-disable-line no-console
  }

  render() {
    console.log('<ContentRouter />     rendered!');    //  eslint-disable-line no-console
    // console.log('<ContentRouter />     this.props.location.key', this.props.location.key);    //  eslint-disable-line no-console
    // console.log('<ContentRouter />     this.state.transitionState', this.state.transitionState);    //  eslint-disable-line no-console
    const { location } = this.props;

    return (
      // <Route render={({ location }) => (     //  eslint-disable-line react/jsx-first-prop-new-line
      // )} />     //  eslint-disable-line react/jsx-closing-bracket-location
      <TransitionGroup
        // component={React.Fragment}
        component={ContentRouterWrapper}
        childFactory={childFactoryCreator(location.key)}
      >
        <CSSTransition
          key={location.key}
          classNames="entering-child"
          timeout={{ enter: 1000, exit: 1000 }}
          unmountOnExit   //  NOTE: when false, does not delete previously mounted components, DOM memory leak
          // appear
          // in
          // in={false}
          // in={this.state.transitionState}
          // mountOnEnter
          // onEnter={(node) => node.scrollTop}    //  NOTE: node is null when switching to about page
          // onEnter={console.log(location.key, '     onEnter: ', Date.now())}    //  BUG: Enter phase is near instant, and not adhering to enter timeout
          // onEntering={console.log(location.key, '    onEntering: ', Date.now())}
          // onEntered={console.log(location.key, '     onEntered: ', Date.now())}
          // onExit={console.log(location.key, '    onExit: ', Date.now())}    //  BUG: Exit phase is near instant, and not adhering to exit timeout
          // onExiting={console.log(location.key, '     onExiting: ', Date.now())}
          // onExited={console.log(location.key, '    onExited: ', Date.now())}
        >
          <SwitchWrapper>
            <Switch location={location}>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </SwitchWrapper>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

ContentRouter.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

//  NOTE: withRouter provides <Switch /> and <Route /> with immutable `location`, not live/mutable history.location
// export default withRouter(ContentRouter);

export default withRouter(ContentRouter);
