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

import MainContent from 'components/MainContent';
import PageBookmark from 'components/PageBookmark';
import PageMain from 'components/PageMain';
import PageWrapper from 'components/PageWrapper';
import PageTitle from 'components/PageTitle';
import Eyebrow from 'components/Eyebrow';

import ContentBackground from './ContentBackground';
import ContentText from './ContentText';
import HeaderBar from './HeaderBar';
import HeaderTitle from './HeaderTitle';

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
      <PageWrapper>
        <PageBookmark></PageBookmark>

        <PageMain>
          <MainContent>
            <HeaderTitle>
              <HeaderBar />
              <PageTitle><b>hey</b><br />there!</PageTitle>
            </HeaderTitle>

            <ContentText>
              <h3>You look like you&apos;re lost.</h3>
              <h4>Lets head back <NavLink to="/">home</NavLink>.</h4>
            </ContentText>
            <ContentBackground><Eyebrow animate /></ContentBackground>
          </MainContent>
        </PageMain>
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
