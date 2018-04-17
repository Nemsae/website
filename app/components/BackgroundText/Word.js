import styled from 'styled-components';

const Word = styled.h1.attrs({ className: 'bg-text__word' })`
  font-size: 10rem;
  color: #fff;
  background: #000;

  text-align: center;
  letter-spacing: 12px;

  margin: 0;
  padding-left: 50px;
`;

export default Word;
