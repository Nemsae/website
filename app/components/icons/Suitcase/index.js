import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from './Wrapper';

const Suitcase = (props) => {
  //  NOTE: from https://cssicon.space/#/icon/suitcase-3
  // const SuitcasePrimitive = styled.div.attrs({ className: 'icon-suitcase' })`
  const SuitcasePrimitive = styled.div.attrs({ className: 'suitcase-3 icon' })`
    ${props.size && `transform: scale(${props.size});`}

    .suitcase-3.icon {
      color: var(--black);
      position: absolute;
      margin-left: 2px;
      margin-top: 6px;
      width: 15px;
      height: 1rem;
      border-radius: 2px;
      border: solid 1px currentColor;
      background-color: currentColor;
    }

    .suitcase-3.icon:before {
      content: '';
      position: absolute;
      left: 4px;
      top: -3px;
      width: 5px;
      height: 2px;
      border-radius: 3px 3px 0 0;
      border-top: solid 1px currentColor;
      border-left: solid 1px currentColor;
      border-right: solid 1px currentColor;
    }

    .suitcase-3.icon:after {
      content: '';
      position: absolute;
      left: 4px;
      width: 7px;
      height: 1rem;
      color: white;
      background-color: currentColor;
    }
  `;
  return (
    <Wrapper>
      <SuitcasePrimitive>
        <div className="suitcase-3 icon"></div>
      </SuitcasePrimitive>
    </Wrapper>
  );
};

Suitcase.propTypes = {
  size: PropTypes.number,
};

export default Suitcase;
