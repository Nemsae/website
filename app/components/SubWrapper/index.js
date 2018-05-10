import styled from 'styled-components';

// import { paperShadow } from 'utils/componentStyles';

const SubWrapper = styled.div.attrs({ className: 'sub-wrapper' })`
  width: 40%;
  height: 100%;

  float: left;
  position: relative;

  background: var(--black);
  color: pink;

  &.pos-top {
    width: 100%;
    height: 60%;
  }
  &.pos-bottom {
    width: 100%;
    height: 40%;
  }
`;

export default SubWrapper;
