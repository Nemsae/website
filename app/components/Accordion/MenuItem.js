import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { transitionAll } from 'utils/transitions';

const MenuItem = styled(NavLink)`
${''/* const MenuItem = styled.li` */}
  height: 50%;
  width: 50%;

  position: relative;

  cursor: pointer;

  ${transitionAll(400)}

  color: #fff;
  :visited {
    color: #fff;
  }

  &.active-link {
    cursor: default;
    .bullet-link {
      background: #FEC0C1;
    }
  }

  &:not(.active-link) {
    &:hover {
      background: #1B1819;

      .bullet-link {
        opacity: 0;
      }
      .link-text {
        color: #fff;
        font-size: 45px;
      }
    }
  }


  &:nth-child(1) {
    border-bottom: 1px solid #1B1819;
    border-right: 1px solid #1B1819;
    .link-group {
      bottom: 8px;
      right: 70px;
    }
  }
  &:nth-child(2) {
    border-left: 1px solid #1B1819;
    border-bottom: 1px solid #1B1819;
    .link-group {
      bottom: 8px;
      left: 70px;
    }
  }
  &:nth-child(3) {
    border-top: 1px solid #1B1819;
    border-right: 1px solid #1B1819;
    ${''/* background: #FEC0C1; */}
    .link-group {
      top: 8px;
      right: 70px;
    }
  }
  &:nth-child(4) {
    border-left: 1px solid #1B1819;
    border-top: 1px solid #1B1819;
    ${''/* background: #DC2543; */}
    .link-group {
      top: 8px;
      left: 70px;
    }
  }
`;

export default MenuItem;
