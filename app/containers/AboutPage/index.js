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
import MainContainer from 'components/MainContainer';
// import P from 'components/P';
// import PageBookmark from 'components/PageBookmark';
// import PageMain from 'components/PageMain';
import PageWrapper from 'components/PageWrapper';
import MainWrapper from 'components/MainWrapper';
import SubWrapper from 'components/SubWrapper';
// import PageTitle from 'components/PageTitle';
// import MoustacheSolidIcon from 'components/icons/MoustacheSolid';
// import SuitcaseIcon from 'components/icons/Suitcase';

// import ItemInfo from 'components/ItemInfo';
import ItemSubTitle from 'components/ItemSubTitle';
import ItemTitle from 'components/ItemTitle';
// import SectionIntro from 'components/SectionIntro';
// import SectionIntroTitle from 'components/SectionIntroTitle';
// import SectionIntroSubTitle from 'components/SectionIntroSubTitle';
// import SectionIntroWrapper from 'components/SectionIntroWrapper';
import SectionList from 'components/SectionList';
import SectionListItem from 'components/SectionListItem';
import SectionItem from 'components/SectionItem';
import SectionRow from 'components/SectionRow';
import ListItemInfo from 'components/ListItemInfo';
import ListItemTitle from 'components/ListItemTitle';
import ListItemSubTitle from 'components/ListItemSubTitle';

// import SubHeader from 'components/SubHeader';
// import SubHeaderTitle from 'components/SubHeaderTitle';
import SectionHero from 'components/SectionHero';
import HeroIntroSubTitle from 'components/HeroIntroSubTitle';
import HeroIntroTitle from 'components/HeroIntroTitle';
import SectionHeroIntro from 'components/SectionHeroIntro';
import SectionHeroTitle from 'components/SectionHeroTitle';
import SectionHeroWrapper from 'components/SectionHeroWrapper';
// import SubHeaderSubTitle from 'components/SubHeaderSubTitle';
// import SubHeaderInfo from 'components/SubHeaderInfo';
import SVGQuoteLeft from 'components/SVGQuoteLeft';
import SVGQuoteRight from 'components/SVGQuoteRight';
// import Header from './Header';
// import HeaderTitle from './HeaderTitle';
// import HeaderSubTitle from './HeaderSubTitle';
// import HeaderInfo from './HeaderInfo';
// import HeaderBar from './HeaderBar';
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
          <SectionHeroWrapper>
            <SectionHero className="color-white">
              <SectionHeroTitle>
              {/* <SectionHeroTitle data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-out-sine" data-aos-duration="600" data-aos-delay="1800"> */}
                web engineer<br />
                artist, &<br />
                <b>music fiend</b>
              </SectionHeroTitle>
            </SectionHero>
          </SectionHeroWrapper>
        </SubWrapper>

        <MainWrapper>
          <MainContainer className="fa-7x">
            <SectionRow id="section-splash" className="no-padding">
              <SectionHeroWrapper className="color-black jc-flex-start">
                <SectionHeroIntro>
                  <HeroIntroTitle>
                    About me<b>*</b>
                  </HeroIntroTitle>
                  <HeroIntroSubTitle>
                    <b>***</b>stuff you ought to know about <strong>john</strong>
                  </HeroIntroSubTitle>
                </SectionHeroIntro>

                {/* <BackgroundVideo autoPlay loop muted>
                  <source src="images/rixi_20180110_012904.mp4" type="video/mp4" />
                  Your browser does not support the mp4 video format.
                </BackgroundVideo> */}
              </SectionHeroWrapper>
            </SectionRow>

            <SectionRow id="section-introduction" className="no-sticky">
            {/* <SectionRow id="section-introduction" className="no-sticky" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-out-sine" data-aos-duration="600" data-aos-delay="2000" > */}
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

            <SectionRow id="section-experience" className="no-sticky">
              <SectionItem className="offset">
                <ItemTitle>
                  02
                </ItemTitle>
                <ItemSubTitle>
                  experience
                </ItemSubTitle>
                <SectionBody>I&apos;ve created, designed and built things with people around the world.</SectionBody>
              </SectionItem>
              <SectionList className="offset">
                <SectionListItem>
                  <ListItemTitle>Freelance</ListItemTitle>
                  <ListItemSubTitle>Web Developer</ListItemSubTitle>
                  <ListItemInfo>built many things</ListItemInfo>
                  <ListItemInfo>collaborate with designers</ListItemInfo>
                </SectionListItem>
                <SectionListItem>
                  <ListItemTitle>Basepaws</ListItemTitle>
                  <ListItemSubTitle>Full Stack Developer</ListItemSubTitle>
                  <ListItemInfo>built redesigned website</ListItemInfo>
                  <ListItemInfo>collaborate closely with CEO and CTO to define project scope & goals</ListItemInfo>
                </SectionListItem>
              </SectionList>
            </SectionRow>

            <SectionRow id="section-addictions" className="no-sticky">
              <SectionItem>
                <ItemTitle>
                  03
                </ItemTitle>
                <ItemSubTitle>
                  addictions
                </ItemSubTitle>
                <SectionBody>Coffee, Crypto, Discovering Music, Anime + Netflix, Consuming Paper Books, Reddit, Games</SectionBody>
              </SectionItem>
              <SectionItem className="offset">
                <ItemTitle>
                  04
                </ItemTitle>
                <ItemSubTitle>
                  inspirations
                </ItemSubTitle>
                <SectionBody>Radiolab, Star Talk Radio, Jordan Peterson, aaawards.com, dribbble.com, collect.ui</SectionBody>
              </SectionItem>
            </SectionRow>

            <SectionRow id="section-inspirations" className="offset no-sticky">
            </SectionRow>

          </MainContainer>

          <SVGQuoteRight />
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
