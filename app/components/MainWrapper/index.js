import styled from 'styled-components';

// import { paperShadow } from 'utils/componentStyles';

const MainWrapper = styled.div.attrs({ className: 'main-wrapper' })`
  width: 60%;
  height: 100%;
  float: right;
  background: var(--white);
  color: var(--black);
  position: relative;

  overflow-x: hidden;

  ${'' /* border-bottom: 5rem solid var(--white); */}

  .right-quote-svg {
    position: sticky;
    bottom: 6rem;
    right: calc(100% - 8rem);
    font-size: 10rem;
    z-index: 2;
    ${'' /* position: fixed;
    bottom: 6rem;
    left: calc(40% + 6rem);
    font-size: 10rem;
    z-index: 2; */}
  }

  &.pos-top {
    width: 100%;
    height: 60%;
  }
  &.pos-bottom {
    width: 100%;
    height: 40%;
  }
`;

export default MainWrapper;
