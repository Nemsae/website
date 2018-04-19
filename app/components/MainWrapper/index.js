import styled from 'styled-components';

// import { paperShadow } from 'utils/componentStyles';

const MainWrapper = styled.div.attrs({ className: 'main-wrapper' })`
  width: 60%;
  height: 100%;
  float: right;
  background: #fff;
  color: #000;
  position: relative;

  ${'' /* overflow-y: auto; */}
  overflow-x: hidden;

  border-bottom: 5rem solid #fff;

  .right-quote-svg {
    position: sticky;
    top: calc(100% - 4rem);
    left: 6rem;
    font-size: 10rem;
    z-index: 2;
    ${'' /* position: fixed;
    bottom: 6rem;
    left: calc(40% + 6rem);
    font-size: 10rem;
    z-index: 2; */}
  }
`;

export default MainWrapper;
