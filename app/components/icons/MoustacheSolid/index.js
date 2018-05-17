import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from './Wrapper';

const MoustacheSolid = (props) => {
  //  NOTE: from https://cssicon.space/#/icon/mustache-solid
  const MoustacheSolidPrimitive = styled.div.attrs({ className: 'icon-moustache_solid' })`
    ${props.size && `transform: scale(${props.size});`}

    .mustache-solid.icon {
      color: var(--black);
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      box-shadow: 5px 8px 0 0 currentColor,  1rem 8px 0 0 currentColor;
    }

    .mustache-solid.icon:before {
      content: '';
      position: absolute;
      left: 1px;
      top: 4px;
      width: 7px;
      height: 4px;
      border-radius: 0 0 0 100%;
      border: 0 solid transparent;
      border-bottom: 6px solid currentColor;
      -webkit-transform-origin: right 7px;
              transform-origin: right 7px;
      -webkit-transform: rotate(-40deg);
              transform: rotate(-40deg);
    }

    .mustache-solid.icon:after {
      content: '';
      position: absolute;
      width: 7px;
      height: 4px;
      left: 13px;
      top: 4px;
      border-radius: 0 0 100% 0;
      border: 0 solid transparent;
      border-bottom: 6px solid currentColor;
      -webkit-transform-origin: left 7px;
              transform-origin: left 7px;
      -webkit-transform: rotate(40deg);
              transform: rotate(40deg);
    }
  `;
  return (
    <Wrapper>
      <MoustacheSolidPrimitive>
        <div className="mustache-solid icon"></div>
      </MoustacheSolidPrimitive>
    </Wrapper>
  );
};

MoustacheSolid.propTypes = {
  size: PropTypes.number,
};

export default MoustacheSolid;
