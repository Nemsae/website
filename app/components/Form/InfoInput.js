import React from 'react';
import styled from 'styled-components';

import SVGQuoteLeft from 'components/SVGQuoteLeft';
import SVGQuoteRight from 'components/SVGQuoteRight';

const Wrapper = styled.div`
  position: relative;
  margin-top: 6rem;

  svg {
    position: absolute;
    color: var(--black);
    transition: color 400ms;
  }
  .left-quote-svg {
    top: -4rem;
    left: -6rem;
  }
  .right-quote-svg {
    bottom: -4rem;
    right: -6rem;
  }
  &.white {
    .textarea--info {
      color: var(--black);
      background-color: var(--white);
      &.valid, :focus, :hover {
        color: var(--white);
        background: var(--black);
        border: 0.5rem solid var(--white);
        &::placeholder {
          color: var(--white);
        }
      }
    }
    svg {
      color: var(--white);
    }
  }
  &.black {
    .textarea--info {
      color: var(--white);
      background-color: var(--black);
      &.valid, :focus, :hover {
        color: var(--black);
        background: var(--white);
        border: 0.5rem solid var(--black);
      }
    }
    svg {
      color: var(--black);
    }
  }
`;

const InfoTextAreaPrimitive = styled.textarea.attrs({ className: 'textarea--info' })`
  background: var(--black);

  font-family: monospace;
  font-size: 2.8rem;
  line-height: 1.3;
  letter-spacing: 4px;

  padding: 1.5rem 4rem;
  width: 37rem;
  height: 9rem;

  transition: all 600ms;
  &.valid, :focus, :hover {
    color: var(--black);
    background: transparent;
    border: 0.5rem solid var(--black);

    font-size: 3rem;
    width: 40rem;
    height: 10rem;
  }
`;

const InfoTextArea = (props) => (
  <Wrapper {...props}>
    <InfoTextAreaPrimitive {...props} />
    <SVGQuoteLeft />
    <SVGQuoteRight />
  </Wrapper>
);

export default InfoTextArea;
