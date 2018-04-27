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
import AnimationWrapper from './AnimationWrapper';

//  NOTE: This returns a childFactory to provide to TransitionGroup, this allows us to pass updated props
//  to children that has already "left" the DOM, but is still contained in state of TransitionGroup.
const childFactoryCreator = (locationKey) => (
  (child) => {
    const childKey = child.key.split('$')[1];
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

export class ContentRouter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // state = { transitionState: false }

  // componentWillReceiveProps(nextProps, nextState) {
  //   // console.log('<ContentRouter />     CWRP!');     //  eslint-disable-line no-console
  //   // console.log(nextProps.location === this.props.location, '<ContentRouter />     nextProps', nextProps);    //  eslint-disable-line no-console
  //   // console.log(this.state.transitionState, '<ContentRouter />     nextProps.location: ', nextProps.location);
  //   if (nextProps.location !== this.props.location) {
  //     //  Here the location/route changed. We need to set `in` as false to trigger exit animation
  //     // console.log('transitionState now ', !this.state.transitionState);
  //     // this.setState({ transitionState: !this.state.transitionState });
  //     //  previousKey is so we can compare the new location.key with the previous one, so we can change `in` for previous node
  //     // this.setState({
  //     //   transitionState: false,
  //     //   previousKey: this.props.location.key,
  //     // });
  //   }
  // }

  //  NOTE: SCU working as intended
  // shouldComponentUpdate(nextProps) {
  //   console.log('<ContentRouter />     SCU!');     //  eslint-disable-line no-console
  //   console.log(this.props.location.key !== nextProps.location.key, '<ContentRouter />     SCU    nextProps.location: ', nextProps.location);     //  eslint-disable-line no-console
  //   if (this.props.location.key !== nextProps.location.key) return true;
  //   return false;
  // }
  //

  // componentDidUpdate(prevProps, prevState) {     //  eslint-disable-line no-unused-vars
  //   console.log('<ContentRouter />     CDU!');     //  eslint-disable-line no-console
  //   // this.setState({ transitionState: true });
  // }
  //
  // componentWillUnmount() {
  //   console.log('<ContentRouter />     CWU!');     //  eslint-disable-line no-console
  // }

  render() {
    console.log('<ContentRouter />     rendered!');    //  eslint-disable-line no-console
    // console.log('<ContentRouter />     this.props.location.key', this.props.location.key);    //  eslint-disable-line no-console
    // console.log('<ContentRouter />     this.state.transitionState', this.state.transitionState);    //  eslint-disable-line no-console
    const { location } = this.props;

    return (
      // <Route render={({ location }) => (     //  eslint-disable-line react/jsx-first-prop-new-line
      // )} />     //  eslint-disable-line react/jsx-closing-bracket-location
      <TransitionGroup
        component={AnimationWrapper}
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
// export default withRouter(ContentRouter);

export default withRouter(ContentRouter);
