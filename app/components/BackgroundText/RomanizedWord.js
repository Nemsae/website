import styled from 'styled-components';

const RomanizedWord = styled.h2.attrs({ className: 'bg-text__word_romanized' })`
  font-size: 5rem;
  color: #fff;
  background: #1B1819;

  text-align: right;
  letter-spacing: 12px;

  margin: 0.5rem 0rem;
  padding-left: 6rem;
  width: 35rem;
  height: 8rem;

  transition: all 600ms;
  :hover {
    color: #1B1819;
    background: transparent;
    border: 0.5rem solid #1B1819;

    font-size: 6rem;
    width: 40rem;
    height: 10rem;
  }
`;

export default RomanizedWord;
