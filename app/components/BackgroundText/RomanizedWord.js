import styled from 'styled-components';

const RomanizedWord = styled.h2.attrs({ className: 'bg-text__word-romanized' })`
  font-size: 5rem;
  color: var(--white);
  background: var(--black);

  text-align: right;
  letter-spacing: 12px;

  margin: 0.5rem 0rem;
  padding-left: 6rem;
  width: 35rem;
  height: 8rem;

  transition: all 600ms;
  :hover {
    color: var(--black);
    background: var(--white);
    border: 0.5rem solid var(--black);

    font-size: 6rem;
    width: 40rem;
    height: 10rem;
  }
`;

export default RomanizedWord;
