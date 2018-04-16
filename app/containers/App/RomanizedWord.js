import styled from 'styled-components';

const RomanizedWord = styled.h2.attrs({ className: 'bg-text__word_romanized' })`

  font-size: 5rem;
  color: #fff;
  background: #000;

  text-align: right;
  letter-spacing: 12px;

  margin: 5px 0px;
  padding-left: 60px;
`;

export default RomanizedWord;
