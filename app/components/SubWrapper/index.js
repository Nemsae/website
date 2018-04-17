import styled from 'styled-components';

// import { paperShadow } from 'utils/componentStyles';

const SubWrapper = styled.div.attrs({ className: 'sub-wrapper' })`
  width: 40%;
  height: 100%;

  float: left;
  position: relative;

  background: #000;
  color: pink;

  .left-quote-svg {
    position: absolute;
    top: 6rem;
    right: 6rem;
    font-size: 10rem;
  }
`;

export default SubWrapper;
