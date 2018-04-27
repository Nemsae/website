import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

/*  Old style imports  */
import MainContainer from 'components/MainContainer';
import PageWrapper from 'components/PageWrapper';

/*  New style imports  */
import SectionIntro from 'components/SectionIntro';
import SectionIntroSubTitle from 'components/SectionIntroSubTitle';
import SectionIntroTitle from 'components/SectionIntroTitle';
import SectionScrollDown from 'components/SectionScrollDown';
import SectionRow from 'components/SectionRow';
import SubHeader from 'components/SubHeader';

import PortfolioItem from 'components/PortfolioItem';

import SectionMedia from 'components/SectionMedia';
import SectionMediaContainer from 'components/SectionMediaContainer';
import SectionItem from 'components/SectionItem';
import ItemTitle from 'components/ItemTitle';
import ItemSubTitle from 'components/ItemSubTitle';
import SectionBody from 'components/SectionBody';

import MainWrapperStyled from './MainWrapperStyled';
import SubWrapperStyled from './SubWrapperStyled';

import reducer from './reducer';
import saga from './saga';

//  ------------------------
//  The projects page
//  ------------------------
export class ProjectsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillUnmount() {
    console.log('<ProjectsPage />     CWU!');     //  eslint-disable-line no-console
  }

  render() {
    console.log('<ProjectsPage />     rendered!');     //  eslint-disable-line no-console
    return (
      <PageWrapper>
        <SubWrapperStyled>
          {/* <SVGQuoteLeft /> */}
          <SubHeader>
            {/* <SubHeaderTitle>john son<br />freelance<br />web<br />developer<br />&<br />music<br />fiend</SubHeaderTitle> */}
          </SubHeader>
        </SubWrapperStyled>
        <MainWrapperStyled>
          <MainContainer>

            <SectionRow id="projects-intro" className="vh-100">
              <SectionIntro>
                <SectionIntroTitle data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-out-sine" data-aos-duration="600" data-aos-delay="1500">
                  crave simple,<br />
                  elegant, &<br />
                  <b>pretty things</b>
                </SectionIntroTitle>
                <SectionIntroSubTitle>
                {/* <SectionIntroSubTitle data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-out-sine" data-aos-duration="600" data-aos-delay="2300" > */}
                  John&apos;s portfolio of projects, ideas, and digital trinkets.
                </SectionIntroSubTitle>
                <SectionScrollDown href="#projects-list" />
              </SectionIntro>
            </SectionRow>

            <SectionRow id="projects-list">

              <PortfolioItem>
                <SectionItem>
                  <ItemTitle>
                    00
                  </ItemTitle>
                  <ItemSubTitle>
                    rixi
                  </ItemSubTitle>
                  <SectionBody>
                    designed and built for John&apos;s personal website
                  </SectionBody>
                  {/* <SectionBody>
                    aos, express, gsap, history, immutable, intl, react, react-addons-css-transition-group, react-helmet, react-intl, react-loadable, react-redux, react-router-dom, react-router-redux, react-transition-group, redux, redux-immutable, redux-saga, reselect, sanitize.css, styled-components
                  </SectionBody> */}
                </SectionItem>
                <SectionMediaContainer>
                  <SectionMedia src="images/rixi__home-page.jpg" />
                </SectionMediaContainer>
              </PortfolioItem>

              <PortfolioItem>
                <SectionItem>
                  <ItemTitle>
                    01
                  </ItemTitle>
                  <ItemSubTitle>
                    basepaws
                  </ItemSubTitle>
                  <SectionBody>built the redesigned website <wbr /> for Basepaws, a startup for feline DNA testing</SectionBody>
                </SectionItem>
                <SectionMediaContainer>
                  <SectionMedia src="images/basepaws__home-page.jpg" />
                </SectionMediaContainer>
              </PortfolioItem>

              <PortfolioItem>
                <SectionItem>
                  <ItemTitle>
                    02
                  </ItemTitle>
                  <ItemSubTitle>
                    affiliato
                  </ItemSubTitle>
                  <SectionBody>built Affiliato, a crowdfunding platform powered through affiliate links</SectionBody>
                </SectionItem>
                <SectionMediaContainer>
                  <SectionMedia src="images/affiliato__home-page.jpg" />
                </SectionMediaContainer>
              </PortfolioItem>

              <PortfolioItem>
                <SectionItem>
                  <ItemTitle>
                    03
                  </ItemTitle>
                  <ItemSubTitle>
                    EzAbsentee
                  </ItemSubTitle>
                  <SectionBody>built EzAbsentee, a quick and surefire way for absentee voting registration</SectionBody>
                </SectionItem>
                <SectionMediaContainer>
                  <SectionMedia src="images/ezabsentee__first-page.jpg" />
                </SectionMediaContainer>
              </PortfolioItem>

              <PortfolioItem>
                <SectionItem>
                  <ItemTitle>
                    04
                  </ItemTitle>
                  <ItemSubTitle>
                    Anime LunchBox
                  </ItemSubTitle>
                  <SectionBody>a web app for anime enthusiasts to watch and track anime</SectionBody>
                </SectionItem>
                <SectionMediaContainer>
                  <SectionMedia src="images/anime-lunchbox__search-page.jpg" />
                </SectionMediaContainer>
              </PortfolioItem>

            </SectionRow>

          </MainContainer>
        </MainWrapperStyled>
      </PageWrapper>
    );
  }
}

ProjectsPage.propTypes = {
};

export function mapDispatchToProps(dispatch) {    //  eslint-disable-line no-unused-vars
  return {
  };
}

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'projects', reducer });
const withSaga = injectSaga({ key: 'projects', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProjectsPage);
