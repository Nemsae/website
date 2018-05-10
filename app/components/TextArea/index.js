import styled from 'styled-components';

const TextArea = styled.textarea.attrs({ className: 'textarea' })`
  background: var(--black);

  font-family: monospace;
  font-size: 2.8rem;
  line-height: 1.3;
  letter-spacing: 4px;

  padding: 1.5rem 4rem;
  width: 37rem;
  height: 12rem;

  transition: all 600ms;
  &.valid, :focus, :hover {
    color: var(--black);
    background: transparent;
    border: 0.5rem solid var(--black);

    font-size: 3rem;
    width: 40rem;
    height: 15rem;
  }
  &.white {
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
  &.black {
    color: var(--white);
    background-color: var(--black);
    &.valid, :focus, :hover {
      color: var(--black);
      background: var(--white);
      border: 0.5rem solid var(--black);
    }
  }
`;

export default TextArea;
