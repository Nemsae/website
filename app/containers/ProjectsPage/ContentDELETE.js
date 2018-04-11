import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fadeIn } from 'utils/keyFrames';
import { paperShadow } from 'utils/componentStyles';

export class Content extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate(nextProps) {
    console.log('<Content />     SCU!');     //  eslint-disable-line no-console
    console.log('<Content />     SCU    nextProps: ', nextProps);     //  eslint-disable-line no-console
    if (this.props.location !== nextProps.location) return true;
    return false;
  }

  render() {
    const ContentPrimitive = styled.div`
    display: flex;

    background-color: pink;

    height: 100%;
    width: 100%;

    ${paperShadow}

    animation: ${fadeIn('right')} 1000ms 200ms both  var(--ease-in-out-quart);
    `;
    return <ContentPrimitive {...this.props}>{ this.props.children }</ContentPrimitive>;
  }
}

Content.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
};

export default Content;
