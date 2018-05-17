import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import PageWrapper from 'components/PageWrapper';
import MainWrapper from 'components/MainWrapper';

import SubMessage from 'components/SubMessage';
import SubMessageWrapper from 'components/SubMessageWrapper';
// import MainContainer from 'components/MainContainer';

import SubWrapperStyled from './SubWrapperStyled';
import SubText from './SubText';

//  ------------------------
//  Temporary Blog Page
//  ------------------------
export class BlogPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('<BlogPage />     rendered!');     //  eslint-disable-line no-console
    return (
      <PageWrapper className="fd-column">
        <SubWrapperStyled className="pos-top">
          <SubMessageWrapper>
            <SubMessage>No blogs yet<br />stay tuned!</SubMessage>
          </SubMessageWrapper>
        </SubWrapperStyled>

        <MainWrapper className="pos-bottom o-hidden">
          {/* <MainContainer>
            <SectionRow id="not-found__introduction" className="no-sticky" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-out-sine" data-aos-duration="600" data-aos-delay="2000" >
              <SubHeaderTitle>Let&apos;s head back home</SubHeaderTitle>
            </SectionRow>
          </MainContainer> */}
          <SubText>ixi</SubText>
        </MainWrapper>
      </PageWrapper>
    );
  }
}

BlogPage.propTypes = {};

export function mapDispatchToProps(dispatch) {    //  eslint-disable-line no-unused-vars
  return {};
}

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(BlogPage);
