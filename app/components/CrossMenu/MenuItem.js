import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { transitionAll400 } from 'utils/transitions';

const MenuItem = styled(NavLink)`
${'' /* const MenuItem = styled.li` */}
  height: 50%;
  width: 50%;

  position: relative;

  cursor: pointer;

  ${transitionAll400}

  &.active-link {
    cursor: default;
    .bullet-link {
      background: #FEC0C1;
    }
  }

  &:not(.active-link) {
    &:hover {
      background: #000;

      .bullet-link {
        opacity: 0;
      }
      .nav-link_styled {
        color: #fff;
        font-size: 45px;
      }
    }
  }


  &:nth-child(1) {
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    .link-group {
      bottom: 8px;
      right: 70px;
    }
  }
  &:nth-child(2) {
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    .link-group {
      bottom: 8px;
      left: 70px;
    }
  }
  &:nth-child(3) {
    border-top: 1px solid #000;
    border-right: 1px solid #000;
    ${'' /* background: #FEC0C1; */}
    .link-group {
      top: 8px;
      right: 70px;
    }
  }
  &:nth-child(4) {
    border-left: 1px solid #000;
    border-top: 1px solid #000;
    ${'' /* background: #DC2543; */}
    .link-group {
      top: 8px;
      left: 70px;
    }
  }
`;

export default MenuItem;
