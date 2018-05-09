import styled from 'styled-components';

const Wrapper = styled.article.attrs({ className: 'bg-text__container' })`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: flex-end;
  flex-direction: column;

  color: #fff;

  &.invert {
    color: #1B1819;
    align-items: flex-start;

    .left-quote-svg, .right-quote-svg {
      color: #fff;
    }
    .bg-text__translation {
      background: #fff;
      :hover {
        border: 0.5rem solid #fff;
        background: #1B1819;
        color: #fff;
      }
      color: #1B1819;
    }
    .bg-text__word {
      background: #fff;
      color: #1B1819;
    }
    .bg-text__word-romanized {
      background: #fff;
      color: #1B1819;
      :hover {
        border: 0.5rem solid #fff;
        background: #1B1819;
        color: #fff;
      }
    }
  }
`;

export default Wrapper;
