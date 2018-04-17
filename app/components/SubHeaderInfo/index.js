import styled from 'styled-components';

const SubHeaderInfo = styled.p.attrs({ className: 'sub-header__info' })`
  color: #fff;
  background: pink;

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
    color: pink;
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

export default SubHeaderInfo;
