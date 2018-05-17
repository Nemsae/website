import styled from 'styled-components';

const SubHeaderInfo = styled.p.attrs({ className: 'sub-header__info' })`
  color: var(--white);
  background: pink;

  font-family: monospace;
  font-size: 2.8rem;
  text-align: right;
  line-height: 1.1;
  letter-spacing: 4px;

  margin-top: 6rem;
  padding: 8px 1rem;
  width: 37rem;

  position: relative;

  .left-quote-svg, .right-quote-svg {
    position: absolute;
    color: pink;
  }
  .left-quote-svg {
    top: -4rem;
    left: -6rem;
  }
  .right-quote-svg {
    bottom: -4rem;
    right: -6rem;
  }
`;

export default SubHeaderInfo;
