import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

// import ContentText from 'components/ContentText';
import SectionBody from 'components/SectionBody';
import SectionContent from 'components/SectionContent';
import SectionIcon from 'components/SectionIcon';
import SectionTitle from 'components/SectionTitle';
import MainContent from 'components/MainContent';
// import P from 'components/P';
// import PageBookmark from 'components/PageBookmark';
// import PageMain from 'components/PageMain';
import PageWrapper from 'components/PageWrapper';
import MainWrapper from 'components/MainWrapper';
import SubWrapper from 'components/SubWrapper';
// import PageTitle from 'components/PageTitle';
// import MoustacheSolidIcon from 'components/icons/MoustacheSolid';
// import SuitcaseIcon from 'components/icons/Suitcase';

import ItemInfo from 'components/ItemInfo';
import ItemSubTitle from 'components/ItemSubTitle';
import ItemTitle from 'components/ItemTitle';
import SectionList from 'components/SectionList';
import SectionListItem from 'components/SectionListItem';

import SectionItem from 'components/SectionItem';
import SectionRow from 'components/SectionRow';

import SubHeader from 'components/SubHeader';
import SubHeaderTitle from 'components/SubHeaderTitle';
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
            <SubHeaderTitle>john son<br />freelance<br />web<br />developer<br />&<br />music<br />fiend</SubHeaderTitle>
            {/* <SubHeaderTitle>about<br />John Son<br />Web Developer</SubHeaderTitle> */}
            {/* <SubHeaderSubTitle>Web<br />Developer</SubHeaderSubTitle> */}
            {/* <SubHeaderTitle>John Son</SubHeaderTitle> */}
          </SubHeader>
        </SubWrapper>

        <MainWrapper>
          <SVGQuoteRight />
          {/* <BackgroundVideo autoPlay loop muted>
            <source src="images/rixi_20180110_012904.mp4" type="video/mp4" />
            Your browser does not support the mp4 video format.
          </BackgroundVideo> */}

          <MainContent className="fa-7x">
            <SectionRow id="section-introduction" className="no-sticky" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-out-sine" data-aos-duration="600" data-aos-delay="1400" >
              {/* <SectionIcon><i className="fas fa-hand-spock" /></SectionIcon> */}
              <SectionItem>
                <ItemTitle>
                  01
                </ItemTitle>
                <ItemSubTitle>
                  introduction
                </ItemSubTitle>
                <SectionBody>My first taste of hacking was at the ripe age of 13, in my parent&apos;s basement, running Cheat Engine to inject botting scripts for a MMORPG, Maplestory. Since then I have delved into self study of computer science and web development while working in various industries around California.</SectionBody>
              </SectionItem>
            </SectionRow>
            <SectionRow id="section-introduction2" className="no-sticky">
              {/* <SectionIcon><i className="fas fa-hand-spock" /></SectionIcon> */}
              <SectionItem className="offset">
                <ItemTitle>
                  02
                </ItemTitle>
                <ItemSubTitle>
                  experience
                </ItemSubTitle>
                <SectionBody>My first taste of hacking was at the ripe age of 13, in my parent&apos;s basement, running Cheat Engine to inject botting scripts for a MMORPG, Maplestory. Since then I have delved into self study of computer science and web development while working in various industries around California.</SectionBody>
              </SectionItem>
            </SectionRow>
            {/* <SectionContent id="section-introduction" className="no-sticky" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-out-sine" data-aos-duration="600" data-aos-delay="1400" >
              <SectionTitle>
                <SectionIcon><i className="fas fa-barcode fa-3x" data-fa-mask="fas fa-comment" data-fa-transform="grow-3" /></SectionIcon>
                introduction
              </SectionTitle>
              <SectionBody>My first taste of hacking was at the ripe age of 13, in my parent&apos;s basement, running Cheat Engine to inject botting scripts for a MMORPG, Maplestory. Since then I have delved into self study of computer science and web development while working in various industries around California.</SectionBody>
            </SectionContent> */}

            <SectionContent id="section-experience" className="offset no-sticky">
            {/* <SectionContent id="section-experience" className="offset" data-aos="fade-left"> */}
              {/* <SectionIcon><i className="fab fa-readme" /></SectionIcon> */}
              <SectionTitle>
                <SectionIcon><i className="fas fa-barcode" data-fa-mask="fas fa-rocket" data-fa-transform="grow-3" /></SectionIcon>
                experience
              </SectionTitle>
              <SectionBody>
                <SectionList>
                  <SectionListItem>
                    <ItemTitle>Freelance</ItemTitle>
                    <ItemSubTitle>Web Developer</ItemSubTitle>
                    <ItemInfo>built many things</ItemInfo>
                  </SectionListItem>
                  <SectionListItem>
                    <ItemTitle>Basepaws</ItemTitle>
                    <ItemSubTitle>Full Stack Developer</ItemSubTitle>
                    <ItemInfo>built redesigned website</ItemInfo>
                  </SectionListItem>
                </SectionList>
              </SectionBody>
            </SectionContent>
            <SectionContent id="section-addictions" className="no-sticky">
              {/* <SectionIcon><i className="fas fa-coffee" /></SectionIcon> */}
              <SectionTitle>
                <SectionIcon><i className="fas fa-barcode" data-fa-mask="fas fa-coffee" data-fa-transform="grow-3" /></SectionIcon>
                addictions
              </SectionTitle>
              <SectionBody>Coffee, Crypto, Discovering Music, Anime + Netflix, Consuming Paper Books, Reddit, Games</SectionBody>
            </SectionContent>
            <SectionContent id="section-inspirations" className="offset no-sticky">
              {/* <SectionIcon><i className="fas fa-coffee" /></SectionIcon> */}
              <SectionTitle>
                <SectionIcon><i className="fas fa-barcode" data-fa-mask="fas fa-fire" data-fa-transform="grow-3" /></SectionIcon>
                inspirations
              </SectionTitle>
              <SectionBody>Radiolab, Star Talk Radio, Jordan Peterson, aaawards.com, dribbble.com, collect.ui</SectionBody>
            </SectionContent>
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
