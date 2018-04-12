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

//  This returns a childFactory to provide to TransitionGroup
const childFactoryCreator = (classNames, locationKey) => {
  console.log('classNames: ', classNames);
  console.log('locationKey: ', locationKey);
  return (
    (child) => (
      React.cloneElement(child, {
        classNames,
      })
    )
  );
};
// const childFactoryCreator = (classNames) => (
//   (child) => (
//     React.cloneElement(child, {
//       classNames,
//     })
//   )
// );

export class ContentRouter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = { transitionState: true }

  componentWillReceiveProps(nextProps, nextState) {
    // console.log('<ContentRouter />     CWRP!');     //  eslint-disable-line no-console
    // console.log(nextProps.location === this.props.location, '<ContentRouter />     nextProps', nextProps);    //  eslint-disable-line no-console
    // console.log(this.state.transitionState, '<ContentRouter />     nextProps.location: ', nextProps.location);
    if (nextProps.location !== this.props.location) {
      //  Here the location/route changed. We need to set `in` as false to trigger exit animation
      console.log('transitionState now false');
      this.setState({ transitionState: false });
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
    console.log('<ContentRouter />     this.props.location.key', this.props.location.key);    //  eslint-disable-line no-console
    const Wrapper = styled.main.attrs({ className: 'content-router' })`
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      overflow: auto;
      height: 100%;
      width: 100%;

      .child-enter-enter {
        .page-bookmark {
          animation: ${fadeIn('left')} 1000ms var(--ease-in-out-quart);
        }
        .page-content {
          animation: ${fadeIn('right')} 1000ms 200ms both var(--ease-in-out-quart);
        }
      }
      .child-exit-enter {
        .page-bookmark {
          animation: ${fadeOut('left')} 1000ms var(--ease-in-out-quart);
        }
        .page-content {
          animation: ${fadeOut('right')} 1000ms 200ms both var(--ease-in-out-quart);
        }
      }

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

    const { location } = this.props;

    return (
      // <Route render={({ location }) => (     //  eslint-disable-line react/jsx-first-prop-new-line
      // )} />     //  eslint-disable-line react/jsx-closing-bracket-location
      <TransitionGroup
        component={Wrapper}
        childFactory={childFactoryCreator(this.state.transitionState ? 'child-enter' : 'child-exit', location.key)}
      >
      {/* <CSSTransitionGroup
        component={Wrapper}
        className="route-fade"
        transitionName="route-fade"
        transitionEnterTimeout={4000}
        transitionLeaveTimeout={4000}
      > */}
        <CSSTransition
          key={location.key}
          classNames="route-fade"
          classNames={this.state.transitionState ? 'child-enter' : 'child-exit'}
          timeout={{ enter: 3000, exit: 3000 }}
          // timeout={4000}
          // appear
          // in
          // in={false}
          // in={this.state.transitionState}
          // mountOnEnter
          unmountOnExit   //  NOTE: when false, does not delete previously mounted components, memory leak
          onEnter={console.log(location.key, '     onEnter: ', Date.now())}    //  BUG: Enter phase is near instant, and not adhering to enter timeout
          onEntering={console.log(location.key, '    onEntering: ', Date.now())}
          onEntered={console.log(location.key, '     onEntered: ', Date.now())}
          onExit={console.log(location.key, '    onExit: ', Date.now())}    //  BUG: Exit phase is near instant, and not adhering to exit timeout
          onExiting={console.log(location.key, '     onExiting: ', Date.now())}
          onExited={console.log(location.key, '    onExited: ', Date.now())}
        // >
        >{(status) => {
          console.log(location.pathname, '<ContentRouter />     CSSTransition    status: ', status);
          return (
            <Switch location={location}>
            {/* <Switch key={location.key} location={location}> */}
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
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

//  NOTE: withRouter provides <Switch /> and <Route /> with immutable `location`, not live/mutable history.location
// export default withRouter(ContentRouter);

export default withRouter(ContentRouter);

// const WrappedRouter = withRouter(ContentRouter);

// export default () => (
//   <BrowserRouter>
//     <WrappedRouter />
//   </BrowserRouter>
// );
