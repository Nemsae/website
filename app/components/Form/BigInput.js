import NormalInput from './Input';

const BigInput = NormalInput.extend.attrs({ className: 'input--big' })`
  font-size: 4rem;
  color: var(--white);
  background: var(--black);

  letter-spacing: 1rem;

  margin: 0;
  padding-left: 4rem;
  height: 12rem;
  width: 40rem;

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

export default BigInput;
