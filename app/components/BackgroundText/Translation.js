import styled from 'styled-components';

const Translation = styled.p.attrs({ className: 'bg-text__translation' })`
  background: #1B1819;

  font-family: monospace;
  font-size: 2.8rem;
  text-align: right;
  line-height: 1.1;
  letter-spacing: 4px;

  margin-top: 6rem;
  padding: 8px 1rem;

  position: relative;

  .left-quote-svg, .right-quote-svg {
    position: absolute;
    color: #1B1819;
    transition: color 400ms;
  }
  .left-quote-svg {
    top: -4rem;
    left: -6rem;
  }
  .right-quote-svg {
    bottom: -4rem;
    right: -6rem;
  }

  width: 37rem;
  height: 9rem;

  transition: all 600ms;
  :hover {
    color: #1B1819;
    background: transparent;
    border: 0.5rem solid #1B1819;

    font-size: 3rem;
    width: 40rem;
    height: 10rem;

    .left-quote-svg, .right-quote-svg {
      color: pink;
    }
  }
`;

export default Translation;
