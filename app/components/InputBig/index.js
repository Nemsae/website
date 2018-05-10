import NormalInput from 'components/Input';

const InputBig = NormalInput.extend.attrs({ className: 'input--big' })`
  font-size: 3.5rem;
  color: var(--white);
  background: var(--black);

  letter-spacing: 0.5rem;

  margin: 0;
  padding-left: 4rem;
  height: 12rem;
  width: 40rem;
`;

export default InputBig;
