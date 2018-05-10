import styled from 'styled-components';

const Wrapper = styled.article.attrs({ className: 'bg-text__container' })`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: flex-end;
  flex-direction: column;

  color: var(--white);

  &.invert {
    color: var(--black);
    align-items: flex-start;

    .left-quote-svg, .right-quote-svg {
      color: var(--white);
    }
    .bg-text__translation {
      background: var(--white);
      :hover {
        border: 0.5rem solid var(--white);
        background: var(--black);
        color: var(--white);
      }
      color: var(--black);
    }
    .bg-text__word {
      background: var(--white);
      color: var(--black);
    }
    .bg-text__word-romanized {
      background: var(--white);
      color: var(--black);
      :hover {
        border: 0.5rem solid var(--white);
        background: var(--black);
        color: var(--white);
      }
    }
  }
`;

export default Wrapper;
