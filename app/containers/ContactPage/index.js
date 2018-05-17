import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

// import Accordion from 'components/Accordion';
// import BackgroundText from 'components/BackgroundText';
import Form from 'components/Form';
import List from 'components/List';
// import ListItemIcon from 'components/ListItemIcon';
import ListItem from 'components/ListItem';
import ListItemNumber from 'components/ListItemNumber';
import ListItemTitle from 'components/ListItemTitle';
import ListItemSubTitle from 'components/ListItemSubTitle';
import ListTitle from 'components/ListTitle';
import ListWrapper from 'components/ListWrapper';
import PageWrapper from 'components/PageWrapper';

import SubWrapperStyled from './SubWrapperStyled';
import MainWrapperStyled from './MainWrapperStyled';

import reducer from './reducer';
import saga from './saga';

//  ------------------------
//  The contact page
//  ------------------------
export class ContactPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  copyText = (text) => {
    console.log('text: ', text);
    // var copyText = document.getElementById("myInput");
    // copyText.select();
    // document.execCommand("copy");

    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.top = 0;
    input.style.left = '-5rem'; //  NOTE: push to left of page

    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    input.style.width = '2em';
    input.style.height = '2em';

    // We don't need padding, reducing the size if it does flash render.
    input.style.padding = 0;

    // Clean up any borders.
    input.style.border = 'none';
    input.style.outline = 'none';
    input.style.boxShadow = 'none';

    // Avoid flash of white box if rendered for any reason.
    input.style.background = 'transparent';
    // input.setAttribute('value', text);
    input.value = text;

    document.body.appendChild(input);
    input.select();
    const result = document.execCommand('copy');
    // document.body.removeChild(input);
    console.log('ContactPage    result: ', result);
    // return result;

    try {
      if (result) {
        console.log('Copied Successfully! Do whatever you want next');
      } else {
        throw ('Unable to copy');
      }
    } catch (err) {
      console.warn('Oops, Something went wrong ', err);
    }
  }

  // copyText = (evt) => {
  //   const id = evt.target.id.split('__')[1];
  //   console.log('evt.target: ', evt.target);
  //   console.log('id: ', id);
  //   // var copyText = document.getElementById("myInput");
  //   // copyText.select();
  //   // document.execCommand("copy");
  // }

  render() {
    console.log('<ContactPage />     rendered!');     //  eslint-disable-line no-console
    return (
      <PageWrapper>
        <SubWrapperStyled>
          <ListWrapper>
            <ListTitle>
              contact<br />
              <b>details</b>
            </ListTitle>
            <List className="white">
              <ListItem id="contact__email" onClick={() => this.copyText('jsson77@gmail.com')}>
                <ListItemNumber className="pos-left">01</ListItemNumber>
                <ListItemSubTitle>email</ListItemSubTitle>
                <ListItemTitle>jsson77@gmail.com</ListItemTitle>
              </ListItem>
              <ListItem id="contact__phone" onClick={() => this.copyText('+1 650 678 2956')}>
                <ListItemNumber className="pos-left">02</ListItemNumber>
                <ListItemSubTitle>phone</ListItemSubTitle>
                <ListItemTitle>+1 650 678 2956</ListItemTitle>
              </ListItem>
              <ListItem id="contact__linkedin" onClick={() => this.copyText('linkedin.com/in/jaysonder')}>
                <ListItemNumber className="pos-left">03</ListItemNumber>
                <ListItemSubTitle>linkedin</ListItemSubTitle>
                <ListItemTitle>jaysonder</ListItemTitle>
              </ListItem>
              <ListItem id="contact__github" onClick={() => this.copyText('github.com/nemsae')}>
                <ListItemNumber className="pos-left">04</ListItemNumber>
                <ListItemSubTitle>github</ListItemSubTitle>
                <ListItemTitle>nemsae</ListItemTitle>
              </ListItem>
            </List>
          </ListWrapper>
        </SubWrapperStyled>
        <MainWrapperStyled>
          <Form />

          {/* <Form /> */}

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
