import NormalInput from 'components/Input';

const InputSmall = NormalInput.extend.attrs({ className: 'input--small' })`
  font-size: 3rem;
  color: var(--white);
  background: var(--black);

  letter-spacing: 0.5rem;

  margin: 0.5rem 0rem;
  padding-left: 4rem;
  width: 35rem;
  height: 9rem;

  &.valid, :focus, :hover {
    font-size: 3.5rem;
    width: 40rem;
    height: 10rem;
  }
`;

export default InputSmall;
