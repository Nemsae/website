import styled from 'styled-components';

const Input = styled.input.attrs({ className: 'input' })`
  position: relative;

  margin: 0;
  padding-left: 1rem;
  text-align: left;
  transition: all 400ms;

  &::selection {
    background-color: var(--pink);
    color: var(--white);
  }

  &.white {
    color: var(--black);
    background: var(--white);

    &.valid, :focus, :hover {
      color: var(--white);
      background: var(--black);
      border: 0.5rem solid var(--white);
    }
  }
  &.black {
    color: var(--white);
    background: var(--black);

    &.valid, :focus, :hover {
      color: var(--black);
      background: var(--white);
      border: 0.5rem solid var(--black);
    }
  }
`;

export default Input;
