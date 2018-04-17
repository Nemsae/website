import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from './Wrapper';

const Moustache = (props) => {
  //  NOTE: from https://cssicon.space/#/icon/mustache
  const MoustachePrimitive = styled.div.attrs({ className: 'icon-moustache' })`
    ${props.size && `transform: scale(${props.size});`}

    color: #000;
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    box-shadow: 5px 8px 0 0 currentColor,  10px 8px 0 0 currentColor;

    ::before {
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

    ::after {
      content: '';
      position: absolute;
      left: 13px;
      top: 4px;
      width: 7px;
      height: 4px;
      border: 0 solid transparent;
      border-bottom: 6px solid currentColor;
      border-radius: 0 0 100% 0;
      -webkit-transform-origin: left 7px;
              transform-origin: left 7px;
      -webkit-transform: rotate(40deg);
              transform: rotate(40deg);
    }

    i {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      color: white;
      box-shadow: 6px 9px 0 0 currentColor,  11px 9px 0 0 currentColor;
      position: absolute;
      z-index: 2;

      ::before {
        content: '';
        position: absolute;
        left: 2px;
        top: 6px;
        width: 6px;
        height: 3px;
        color: white;
        border: 0 solid transparent;
        border-bottom: 4px solid currentColor;
        border-radius: 0 0 0 100%;
        -webkit-transform-origin: right 5px;
                transform-origin: right 5px;
        -webkit-transform: rotate(-40deg);
                transform: rotate(-40deg);
      }

      ::after {
        content: '';
        position: absolute;
        left: 13px;
        top: 6px;
        width: 6px;
        height: 3px;
        color: white;
        border: 0 solid transparent;
        border-bottom: 4px solid currentColor;
        border-radius: 0 0 100% 0;
        -webkit-transform-origin: left 5px;
                transform-origin: left 5px;
        -webkit-transform: rotate(40deg);
                transform: rotate(40deg);
      }
    }
  `;
  return (
    <Wrapper>
      <MoustachePrimitive>
        <i />
      </MoustachePrimitive>
    </Wrapper>
  );
};

Moustache.propTypes = {
  size: PropTypes.number,
};

export default Moustache;
