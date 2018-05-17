import styled from 'styled-components';

const Word = styled.h1.attrs({ className: 'bg-text__word' })`
  font-size: 10rem;
  color: var(--white);
  background: var(--black);

  text-align: center;
  letter-spacing: 12px;

  margin: 0;
  padding-left: 5rem;
  width: 40rem;
`;

export default Word;
