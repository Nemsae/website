import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import BackgroundVideo from './BackgroundVideo';
// import H2 from 'components/H2';
import Wrapper from './Wrapper';

// import { makeSelectRecommendations, makeSelectFeatures } from './selectors';
// import { fetchRecommendations, rateRecommendation, fetchFeatures } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

//  NOTE: for main bg video, swap to fullscreen video.

export class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('<AboutPage />     rendered!');
    return (
      <Wrapper>
        {/* eslint-disable jsx-a11y/media-has-caption */}
        <BackgroundVideo autoPlay loop muted onLoadedData={() => console.log('Video loaded.')}>
          <source src="images/rixi_20180110_012904.mp4" type="video/mp4" />
          Your browser does not support the mp4 video format.
        </BackgroundVideo>
        {/* eslint-ensable jsx-a11y/media-has-caption */}
      </Wrapper>
    );
  }
}

AboutPage.propTypes = {
  // recommendations: PropTypes.array,
};

export function mapDispatchToProps(dispatch) {
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
