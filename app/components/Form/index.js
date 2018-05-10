import React from 'react';
import PropTypes from 'prop-types';
// import { CSSTransition } from 'react-transition-group';

import Panel from './Panel';
import PanelHeader from './PanelHeader';
import PanelNumber from './PanelNumber';
import PanelInfo from './PanelInfo';
import PanelTitle from './PanelTitle';
import Wrapper from './Wrapper';
// import messages from './messages3';

// import Animations from './Animations';

export class Form extends React.PureComponent {
  state = {}

  submitForm = () => {}

  render() {
    console.log('<Form />     rendered!');     //  eslint-disable-line no-console
    const { activePanel } = this.state;
    console.log('activePanel: ', activePanel);
    return (
      <Wrapper>
        <Panel onClick={() => this.maximizePanel(1)} active={activePanel === 1}>
          {
            activePanel === 1 &&
            <PanelInfo></PanelInfo>
          }
          <PanelHeader>
            <PanelNumber>01</PanelNumber>
            <PanelTitle>email john</PanelTitle>
          </PanelHeader>
        </Panel>
        <Panel className="top" onClick={() => this.maximizePanel(2)} active={activePanel === 2}>
          <PanelHeader>
            <PanelTitle>share music</PanelTitle>
            <PanelNumber>02</PanelNumber>
          </PanelHeader>
          {
            activePanel === 2 &&
            <PanelInfo></PanelInfo>
          }
        </Panel>
      </Wrapper>
    );
  }
}

Form.propTypes = {
  // active: PropTypes.bool,
};

export default Form;
