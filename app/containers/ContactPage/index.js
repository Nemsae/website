import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import MainContent from 'components/MainContent';
import PageBookmark from 'components/PageBookmark';
import PageMain from 'components/PageMain';
import PageWrapper from 'components/PageWrapper';
import PageTitle from 'components/PageTitle';
import Eyebrow from 'components/Eyebrow';

import ContentBackground from './ContentBackground';
import HeaderBar from './HeaderBar';
import HeaderTitle from './HeaderTitle';
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
        <PageBookmark></PageBookmark>

        <PageMain>
          <MainContent>
            <HeaderTitle>
              <HeaderBar />
              <PageTitle><b>hey</b><br />there!</PageTitle>
            </HeaderTitle>

            <ContentBackground><Eyebrow animate /></ContentBackground>
          </MainContent>
        </PageMain>
      </PageWrapper>
    );
  }
}

ContactPage.propTypes = {
};

export function mapDispatchToProps(dispatch) {    //  eslint-disable-line no-unused-vars
  return {
  };
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
