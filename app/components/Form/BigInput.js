import NormalInput from './Input';

const BigInput = NormalInput.extend.attrs({ className: 'input--big' })`
  font-size: 10rem;
  color: var(--white);
  background: var(--black);

  text-align: center;
  letter-spacing: 12px;

  margin: 0;
  padding-left: 50px;
  width: 400px;

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
