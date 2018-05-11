import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

// import Accordion from 'components/Accordion';
import BackgroundText from 'components/BackgroundText';
import Form from 'components/Form';
import List from 'components/List';
import ListItem from 'components/ListItem';
import ListItemNumber from 'components/ListItemNumber';
// import ListItemTitle from 'components/ListItemTitle';

// import MainContainer from 'components/MainContainer';
import PageWrapper from 'components/PageWrapper';
// import SubHeader from 'components/SubHeader';
// import SectionIntro from 'components/SectionIntro';
// import SectionIntroTitle from 'components/SectionIntroTitle';
// import SectionIntroSubTitle from 'components/SectionIntroSubTitle';
// import SectionRow from 'components/SectionRow';
// import SubHeaderTitle from 'components/SubHeaderTitle';
// import SectionHeroWrapper from 'components/SectionHeroWrapper';
// import SectionHero from 'components/SectionHero';
// import SectionHeroTitle from 'components/SectionHeroTitle';
// import SectionList from 'components/SectionList';
// import SectionListItem from 'components/SectionListItem';

// import SubWrapper from 'components/SubWrapper';
// import MainWrapper from 'components/MainWrapper';

// import Eyebrow from 'components/Eyebrow';

// import SectionIntroSubTitleStyled from './SectionIntroSubTitleStyled';
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
          {/* <SectionList className="centered">
            <ListItem>
              01
            </ListItem>
            <ListItem>
              02
            </ListItem>
          </SectionList> */}
          <List>
            <ListItem>
              <ListItemNumber>01</ListItemNumber>
              {/* <ListItemTitle>01</ListItemTitle> */}
            </ListItem>
          </List>
          {/* <BackgroundText className="invert" /> */}
        </SubWrapperStyled>
        <MainWrapperStyled>
          <Form />
          {/* NOTE: make this a alert message, a 2 sec modal that slides in then out. */}
          {/* <SectionHeroWrapper>
            <SectionHero className="color-black">
              <SectionHeroTitle>
                <b>currently i am</b><br />
                unavailable<br />
                <b>for work.</b>
              </SectionHeroTitle>
            </SectionHero>
          </SectionHeroWrapper> */}


          {/* <MainContainer>
            <Accordion>
            </Accordion>
          </MainContainer> */}
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
