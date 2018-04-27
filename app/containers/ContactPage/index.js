import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import MainContainer from 'components/MainContainer';
import PageWrapper from 'components/PageWrapper';
import SubHeader from 'components/SubHeader';
import SectionIntro from 'components/SectionIntro';
import SectionIntroTitle from 'components/SectionIntroTitle';
// import SectionIntroSubTitle from 'components/SectionIntroSubTitle';
import SectionRow from 'components/SectionRow';
// import SectionScrollDown from 'components/SectionScrollDown';

// import MainContent from 'components/MainContent';
// import PageBookmark from 'components/PageBookmark';
// import PageMain from 'components/PageMain';
// import PageWrapper from 'components/PageWrapper';
// import PageTitle from 'components/PageTitle';
import Eyebrow from 'components/Eyebrow';

import SectionIntroSubTitleStyled from './SectionIntroSubTitleStyled';
import SubWrapperStyled from './SubWrapperStyled';
import MainWrapperStyled from './MainWrapperStyled';
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
        <SubWrapperStyled>
          {/* <SVGQuoteLeft /> */}
          <SubHeader>
            {/* <SubHeaderTitle>john son<br />freelance<br />web<br />developer<br />&<br />music<br />fiend</SubHeaderTitle> */}
          </SubHeader>
        </SubWrapperStyled>
        <MainWrapperStyled>
          <MainContainer>

            <SectionRow id="contact-intro" className="vh-100">
              <SectionIntro>
                <SectionIntroTitle>
                  say hi,<br />
                  hello, &<br />
                  <b>good bye</b>
                </SectionIntroTitle>
                <SectionIntroSubTitleStyled>
                  email: <b>jsson77@gmail.com</b><br />
                  phone: <b>(650) 678-2956</b><br />
                  code: <b>github.com/nemsae</b>
                </SectionIntroSubTitleStyled>
              </SectionIntro>
              {/* <Eyebrow /> */}
            </SectionRow>

            <SectionRow id="contact-form">
            </SectionRow>

          </MainContainer>
        </MainWrapperStyled>
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
