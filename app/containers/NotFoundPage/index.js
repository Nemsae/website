/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { NavLink } from 'react-router-dom';

// import MainContent from 'components/MainContent';
import PageWrapper from 'components/PageWrapper';
import MainWrapper from 'components/MainWrapper';

import RixiLogo from 'components/RixiLogo';
// import SubHeader from 'components/SubHeader';
import SubMessage from 'components/SubMessage';
import SubMessageWrapper from 'components/SubMessageWrapper';
// import SubHeaderTitle from 'components/SubHeaderTitle';
import MainContainer from 'components/MainContainer';
// import SectionRow from 'components/SectionRow';

import SubWrapperStyled from './SubWrapperStyled';
import SubText from './SubText';
// import MainWrapperStyled from './MainWrapperStyled';
// import ContentBackground from './ContentBackground';
// import ContentText from './ContentText';

//  ------------------------
//  The 404 page
//  ------------------------
export class NotFoundPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillUnmount() {
    console.log('<NotFoundPage />     CWU!');     //  eslint-disable-line no-console
  }

  render() {
    console.log('<NotFoundPage />     rendered!');     //  eslint-disable-line no-console
    return (
      <PageWrapper className="fd-column">
        <SubWrapperStyled className="pos-top">
          <SubMessageWrapper>
            <SubMessage>It looks like we&apos;re lost!</SubMessage>
          </SubMessageWrapper>
        </SubWrapperStyled>

        <MainWrapper className="pos-bottom">
          <MainContainer>
            <SubText>404</SubText>
            {/* <SectionRow id="not-found__introduction" className="no-sticky" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-out-sine" data-aos-duration="600" data-aos-delay="2000" >
              <SubHeaderTitle>Let&apos;s head back home</SubHeaderTitle>
            </SectionRow> */}
          </MainContainer>
        </MainWrapper>
      </PageWrapper>
    );
  }
}

NotFoundPage.propTypes = {};

export function mapDispatchToProps(dispatch) {    //  eslint-disable-line no-unused-vars
  return {};
}

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(NotFoundPage);
