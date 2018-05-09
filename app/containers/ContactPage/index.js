import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import Accordion from 'components/Accordion';
import MainContainer from 'components/MainContainer';
import PageWrapper from 'components/PageWrapper';
// import SubHeader from 'components/SubHeader';
import SectionIntro from 'components/SectionIntro';
import SectionIntroTitle from 'components/SectionIntroTitle';
// import SectionIntroSubTitle from 'components/SectionIntroSubTitle';
import SectionRow from 'components/SectionRow';
// import SubHeaderTitle from 'components/SubHeaderTitle';
import SectionHeroWrapper from 'components/SectionHeroWrapper';
import SectionHero from 'components/SectionHero';
import SectionHeroTitle from 'components/SectionHeroTitle';

import SubWrapper from 'components/SubWrapper';
import MainWrapper from 'components/MainWrapper';

// import Eyebrow from 'components/Eyebrow';

import SectionIntroSubTitleStyled from './SectionIntroSubTitleStyled';
// import SubWrapperStyled from './SubWrapperStyled';
// import MainWrapperStyled from './MainWrapperStyled';

import reducer from './reducer';
import saga from './saga';

//  ------------------------
//  The contact page
//  ------------------------
export class ContactPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillUnmount() {
    console.log('<ContactPage />     CWU!');     //  eslint-disable-line no-console
  }

  render() {
    console.log('<ContactPage />     rendered!');     //  eslint-disable-line no-console
    return (
      <PageWrapper>
        <SubWrapper>
          {/* <SVGQuoteLeft /> */}
          <SectionHeroWrapper>
            <SectionHero className="color-white">
              <SectionHeroTitle>
                <b>currently i am</b><br />
                unavailable<br />
                <b>for work.</b>
                {/* say hello,<br />
                inquire, or<br />
                <b>share a song</b> */}
                {/* e: jsson77@gmail.com<br />
                p: +1 650 678 2956<br />
                <b>foo bar</b> */}
              </SectionHeroTitle>
            </SectionHero>
          </SectionHeroWrapper>
        </SubWrapper>
        <MainWrapper>
          <MainContainer>

            <Accordion>
              {/* <card>
                contact me
              </card>
              <card>
                share music
              </card> */}
            </Accordion>

            {/* <SectionRow id="contact-intro" className="vh-100" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-out-sine" data-aos-duration="600" data-aos-delay="1800">
            </SectionRow> */}
            {/* <SectionRow id="contact-form">
            </SectionRow> */}

          </MainContainer>
        </MainWrapper>
      </PageWrapper>
    );
  }
}

ContactPage.propTypes = {};

export function mapDispatchToProps(dispatch) {    //  eslint-disable-line no-unused-vars
  return {};
}

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'contact', reducer });
const withSaga = injectSaga({ key: 'contact', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ContactPage);
