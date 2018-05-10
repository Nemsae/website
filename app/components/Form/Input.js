import styled from 'styled-components';

const Input = styled.input.attrs({ className: 'input' })`
  margin: 0;
  padding-left: 50px;
  transition: all 400ms;
  &:hover, &::selection {
    &.black {
      border: 0.5rem solid var(--white);
    }
    &.white {
      border: 0.5rem solid var(--black);
    }
  }
`;

export default Input;
