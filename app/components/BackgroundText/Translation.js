import styled from 'styled-components';

const Translation = styled.p.attrs({ className: 'bg-text__translation' })`
  background: var(--black);

  font-family: monospace;
  font-size: 2.8rem;
  text-align: right;
  line-height: 1.1;
  letter-spacing: 4px;

  margin-top: 6rem;
  padding: 1rem;

  position: relative;

  .left-quote-svg, .right-quote-svg {
    position: absolute;
    color: var(--black);
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

  transition: all 600ms;
  :hover {
    color: var(--black);
    background: transparent;

    border: 0.5rem solid var(--black);
    padding: 2rem 1rem;

    font-size: 3rem;
    width: 40rem;

    .left-quote-svg, .right-quote-svg {
      color: pink;
    }
  }
`;

export default Translation;
