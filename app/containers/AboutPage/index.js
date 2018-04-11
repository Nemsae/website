import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

// import H2 from 'components/H2';
// import P from 'components/P';

import BackgroundVideo from './BackgroundVideo';
import BookMark from './BookMark';
import Content from './Content';
import H2 from './H2';
import HeaderBar from './HeaderBar';
import HeaderTitle from './HeaderTitle';
import P from './P';
import TextContent from './TextContent';
import Wrapper from './Wrapper';

// import { makeSelectRecommendations, makeSelectFeatures } from './selectors';
// import { fetchRecommendations, rateRecommendation, fetchFeatures } from './actions';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

//  NOTE: for main bg video, swap to fullscreen video.

export class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('<AboutPage />     rendered!');     //  eslint-disable-line no-console
    return (
      <Wrapper>
        {/* eslint-disable jsx-a11y/media-has-caption */}
        <BookMark></BookMark>

        <Content>
          <BackgroundVideo autoPlay loop muted>
            <source src="images/rixi_20180110_012904.mp4" type="video/mp4" />
            Your browser does not support the mp4 video format.
          </BackgroundVideo>

          <TextContent>
            <HeaderTitle>
              <HeaderBar />
              <H2><b>about</b><br />myself</H2>
              {/* <CSSTransition in timeout={1000}>
                {(state) => {
                  console.log('state: ', state);
                  return <H2 className={state}><b>about</b><br />myself</H2>;
                }}
              </CSSTransition> */}
            </HeaderTitle>

            <P>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</P>
          </TextContent>
        </Content>
        {/* eslint-ensable jsx-a11y/media-has-caption */}
      </Wrapper>
    );
  }
}

AboutPage.propTypes = {
  // recommendations: PropTypes.array,
};

// export function mapDispatchToProps(dispatch) {
export function mapDispatchToProps() {
  return {
    // fetchRecommendationsPage: (page, amt) => dispatch(fetchRecommendations(page, amt)),
  };
}

const mapStateToProps = createStructuredSelector({
  // loading: makeSelectLoading(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'about', reducer });
const withSaga = injectSaga({ key: 'about', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AboutPage);
