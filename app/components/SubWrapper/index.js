import styled from 'styled-components';

// import { paperShadow } from 'utils/componentStyles';

const SubWrapper = styled.div.attrs({ className: 'sub-wrapper' })`
  width: 40%;
  height: 100%;

  float: left;
  position: relative;

  background: var(--black);
  color: var(--white);

  box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);

  &.pos-left, &.pos-right {
    width: 40%;
    height: 100%;
  }
  &.pos-left {
    float: left;
  }
  &.pos-right {
    float: right;
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

export default SubWrapper;
