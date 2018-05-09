import React from 'react';
import PropTypes from 'prop-types';
// import { CSSTransition } from 'react-transition-group';

import Panel from './Panel';
import PanelInfo from './PanelInfo';
import PanelTitle from './PanelTitle';
import Wrapper from './Wrapper';
// import messages from './messages3';

// import Animations from './Animations';

export class Accordion extends React.PureComponent {
  state = {
    activePanel: 0,
  }

  maximizePanel = (panelNumber) => {
    this.setState({ activePanel: panelNumber });
  }

  render() {
    console.log('<Accordion />     rendered!');     //  eslint-disable-line no-console
    const { activePanel } = this.state;
    console.log('activePanel: ', activePanel);
    return (
      <Wrapper>
        <Panel onClick={() => this.maximizePanel(1)} active={activePanel === 1}>
          {
            activePanel === 1 &&
            <PanelInfo></PanelInfo>
          }
          <PanelTitle>email john</PanelTitle>
        </Panel>
        <Panel className="top" onClick={() => this.maximizePanel(2)} active={activePanel === 2}>
          <PanelTitle>share music</PanelTitle>
          {
            activePanel === 2 &&
            <PanelInfo></PanelInfo>
          }
        </Panel>
      </Wrapper>
    );
  }
}

Accordion.propTypes = {
  // active: PropTypes.bool,
};

export default Accordion;
