import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import BackgroundText from 'components/BackgroundText';
import ContentText from 'components/ContentText';
import MainContent from 'components/MainContent';
import P from 'components/P';
// import PageBookmark from 'components/PageBookmark';
// import PageMain from 'components/PageMain';
import PageWrapper from 'components/PageWrapper';
import MainWrapper from 'components/MainWrapper';
import SubWrapper from 'components/SubWrapper';
import PageTitle from 'components/PageTitle';

import SubHeader from 'components/SubHeader';
import SubHeaderTitle2 from 'components/SubHeaderTitle2';
import SubHeaderSubTitle from 'components/SubHeaderSubTitle';
import SubHeaderInfo from 'components/SubHeaderInfo';
import SVGQuoteLeft from 'components/SVGQuoteLeft';
import SVGQuoteRight from 'components/SVGQuoteRight';
// import Header from './Header';
import HeaderTitle from './HeaderTitle';
// import HeaderSubTitle from './HeaderSubTitle';
// import HeaderInfo from './HeaderInfo';
import HeaderBar from './HeaderBar';
// import MainContentOverflow from './MainContentOverflow';

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
        <SubWrapper>
          <SVGQuoteLeft />
          <SubHeader>
            <SubHeaderTitle2>John Son<br />Web Developer</SubHeaderTitle2>
            {/* <SubHeaderSubTitle>Web<br />Developer</SubHeaderSubTitle> */}
            {/* <SubHeaderTitle>John Son</SubHeaderTitle> */}
            {/* <SubHeaderSubTitle>Web Developer</SubHeaderSubTitle>
            <SubHeaderInfo>
              lover of all things simple, elegant, and art
            </SubHeaderInfo> */}
          </SubHeader>
        </SubWrapper>

        <MainWrapper>
          <SVGQuoteRight />
          {/* <BackgroundVideo autoPlay loop muted>
            <source src="images/rixi_20180110_012904.mp4" type="video/mp4" />
            Your browser does not support the mp4 video format.
          </BackgroundVideo> */}

          <MainContent>
            {/* <HeaderTitle>
              about me
            </HeaderTitle> */}
            {/* <HeaderTitleOLD>
              <HeaderBar />
              <PageTitle>
                <b>about</b>
                <br />
                myself
              </PageTitle>
            </HeaderTitleOLD> */}

            {/* <ContentText>
              <P>
                My first taste of hacking was at the ripe age of 13, in my parent&apos;s basement, running Cheat Engine to inject botting scripts for a MMORPG, Maplestory. Since then I have delved into self study of computer science and web development while working in various industries around California.
                <br />
                <br />
                Since 2016 I&apos;ve been working as a freelance web developer and a half year working remotely as a fullstack software engineer with a startup, Basepaws.
                <br />
                <br />
                Currently hungry for more UI and UX design!
              </P>
            </ContentText> */}
          </MainContent>
        </MainWrapper>
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
