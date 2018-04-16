import styled from 'styled-components';

const Translation = styled.p.attrs({ className: 'bg-text__translation' })`
  color: #fff;
  background: #000;

  font-family: monospace;
  font-size: 2.8rem;
  text-align: right;
  line-height: 1.1;
  letter-spacing: 4px;

  margin-top: 60px;
  padding: 8px 10px;
  width: 370px;

  position: relative;

  .left-quote-svg, .right-quote-svg {
    position: absolute;
    color: #000;
  }
  .left-quote-svg {
    top: -40px;
    left: -60px;
  }
  .right-quote-svg {
    bottom: -40px;
    right: -60px;
  }
`;

export default Translation;
