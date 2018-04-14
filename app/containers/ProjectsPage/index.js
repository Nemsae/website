import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import ContentText from 'components/ContentText';
import P from 'components/P';

import MainContent from 'components/MainContent';
import PageBookmark from 'components/PageBookmark';
import PageMain from 'components/PageMain';
import PageWrapper from 'components/PageWrapper';
import PageTitle from 'components/PageTitle';


import HeaderBar from './HeaderBar';
import HeaderTitle from './HeaderTitle';
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
        <PageBookmark></PageBookmark>

        <PageMain>
          <MainContent>
            <HeaderTitle>
              <HeaderBar />
              <PageTitle><b>john&apos;s</b><br />projects</PageTitle>
            </HeaderTitle>

            <ContentText>
              <P>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</P>
            </ContentText>
          </MainContent>
        </PageMain>
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
