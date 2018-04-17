import styled from 'styled-components';

import { fadeIn, fadeOut } from 'utils/keyFrames';

const Wrapper = styled.div`
  .entering-child-enter, .entering-child-enter-active {
    .sub-wrapper {
      transform: translate3d(-2000px, 0, 0);
    }
    .main-wrapper {
      transform: translate3d(2000px, 0, 0);
    }
  }
  .entering-child-enter-done {
    .sub-wrapper {
      animation: ${fadeIn('left')} 1000ms both var(--ease-in-out-quart);
    }
    .main-wrapper {
      animation: ${fadeIn('right')} 1000ms both var(--ease-in-out-quart);
    }
  }
  .exiting-child-exit, .exiting-child-exit-active {
    .sub-wrapper {
      animation: ${fadeOut('left')} 1000ms both var(--ease-in-out-quart);
    }
    .main-wrapper {
      animation: ${fadeOut('right')} 1000ms both var(--ease-in-out-quart);
    }
  }
  .exiting-child-exit-done {
    ${'' /* .sub-wrapper {
      transform: translate3d(0, -2000px, 0);
    }
    .main-wrapper {
      transform: translate3d(-2000px, 0, 0);
    } */}
  }
`;

export default Wrapper;
