import styled from 'styled-components';
// import { transitionAll400 } from 'utils/transitions';

const MenuItem = styled.li`
  height: 50%;
  width: 50%;

  ${'' /* border: 1px solid #000; */}

  position: relative;

  cursor: pointer;
  ${'' /* &:hover {
    background: #000;
    color: #fff;
  } */}

  color: #FEC0C1;

  ${'' /* ${transitionAll400} */}

  &:hover {
    transform: scale(1.1);
  }

  &:nth-child(1) {
    background: #FEC0C1;
    .link-group {
      bottom: 8px;
      right: 30px;
    }
    .bullet-link {
      background: #fff;
    }
    .nav-link_styled {
      color: #fff;
    }
  }
  &:nth-child(2) {
    .link-group {
      bottom: 8px;
      left: 30px;

      color: #000;
    }
  }
  &:nth-child(3) {
    ${'' /* background: #FEC0C1; */}
    .link-group {
      top: 8px;
      right: 30px;
    }
  }
  &:nth-child(4) {
    ${'' /* background: #DC2543; */}
    background: #FEC0C1;
    .link-group {
      top: 8px;
      left: 30px;
    }
    .bullet-link {
      background: #fff;
    }
    .nav-link_styled {
      color: #fff;
    }
  }
`;

export default MenuItem;
