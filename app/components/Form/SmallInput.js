// import styled from 'styled-components';
import NormalInput from './Input';

const SmallInput = NormalInput.extend.attrs({ className: 'input--small' })`
  font-size: 3rem;
  color: var(--white);
  background: var(--black);

  letter-spacing: 1rem;

  margin: 0.5rem 0rem;
  padding-left: 4rem;
  width: 35rem;
  height: 9rem;

  :focus, :hover {
    font-size: 4rem;
    width: 40rem;
    height: 10rem;
  }
  &.white {
    color: var(--black);
    background: var(--white);
    :focus, :hover {
      color: var(--white);
      background: var(--black);
      border: 0.5rem solid var(--white);
    }
  }
  &.black {
    color: var(--white);
    background: var(--black);
    :focus, :hover {
      color: var(--black);
      background: var(--white);
      border: 0.5rem solid var(--black);
    }
  }
`;

export default SmallInput;
