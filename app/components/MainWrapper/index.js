import styled from 'styled-components';

// import { paperShadow } from 'utils/componentStyles';

const MainWrapper = styled.div.attrs({ className: 'main-wrapper' })`
  width: 60%;
  height: 100%;
  float: right;
  background: #fff;
  color: #000;
  position: relative;

  .right-quote-svg {
    position: absolute;
    bottom: 6rem;
    left: 6rem;
    font-size: 10rem;
    z-index: 2;
  }
`;

export default MainWrapper;
