import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import PageBookMark from 'components/PageBookmark';
import PageContent from 'components/PageContent';
import PageWrapper from 'components/PageWrapper';
import PageTitle from 'components/PageTitle';

import HeaderBar from './HeaderBar';
import HeaderTitle from './HeaderTitle';
import P from './P';
import TextContent from './TextContent';

import BackgroundVideo from './BackgroundVideo';

import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

//  ------------------------
//  The about me page
//  ------------------------
export class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('<AboutPage />     CWRP!');     //  eslint-disable-line no-console
  //   // console.log('<AboutPage />     this.props.location.pathname: ', this.props.location.pathname);
  //   // console.log('<AboutPage />     nextProps: ', nextProps);
  //   // console.log('<AboutPage />     nextProps.location.pathname: ', nextProps.location.pathname);
  //   // if (nextProps.location.pathname !== this.props.location.pathname) {}
  // }

  // componentWillUnmount() {
  //   console.log('<AboutPage />     CWU!');     //  eslint-disable-line no-console
  // }

  render() {
    console.log('<AboutPage />     rendered!');     //  eslint-disable-line no-console
    // console.log('<AboutPage />     this.props', this.props);    //  eslint-disable-line no-console
    return (
      <PageWrapper>
        {/* eslint-disable jsx-a11y/media-has-caption */}
        <PageBookMark></PageBookMark>

        <PageContent>
          <BackgroundVideo autoPlay loop muted>
            <source src="images/rixi_20180110_012904.mp4" type="video/mp4" />
            Your browser does not support the mp4 video format.
          </BackgroundVideo>

          <TextContent>
            <HeaderTitle>
              <HeaderBar />
              <PageTitle><b>about</b><br />myself</PageTitle>
            </HeaderTitle>

            <P>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</P>
          </TextContent>
        </PageContent>
        {/* eslint-ensable jsx-a11y/media-has-caption */}
      </PageWrapper>
    );
  }
}

AboutPage.propTypes = {
};

export function mapDispatchToProps(dispatch) {    //  eslint-disable-line no-unused-vars
  return {
  };
}

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'about', reducer });
const withSaga = injectSaga({ key: 'about', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AboutPage);
