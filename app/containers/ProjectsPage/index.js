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
// import MainWrapper from 'components/MainWrapper';
// import SubWrapper from 'components/SubWrapper';
import SectionIntro from 'components/SectionIntro';
import SectionIntroSubTitle from 'components/SectionIntroSubTitle';
import SectionIntroTitle from 'components/SectionIntroTitle';
import SectionScrollDown from 'components/SectionScrollDown';
import SectionRow from 'components/SectionRow';
import SubHeader from 'components/SubHeader';
// import SubHeaderTitle from 'components/SubHeaderTitle';
// import SVGQuoteLeft from 'components/SVGQuoteLeft';
// import SVGQuoteRight from 'components/SVGQuoteRight';

import MainWrapperStyled from './MainWrapperStyled';
import SubWrapperStyled from './SubWrapperStyled';
// import HeaderBar from './HeaderBar';
// import HeaderTitle from './HeaderTitle';
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

            <SectionRow>
              <SectionIntro>
                <SectionIntroTitle>
                  {/* crave simple,<br />elegant, & speed<br />products */}
                  crave simple,<br />
                  elegant, &<br />
                  <b>pretty things</b>
                </SectionIntroTitle>
                <SectionIntroSubTitle>
                  products that John has worked on
                </SectionIntroSubTitle>
                <SectionScrollDown href="#section-projects" />
              </SectionIntro>
            </SectionRow>

            <SectionRow id="section-projects">
              Projects go here
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
