import styled from 'styled-components';

import { fadeIn, fadeOut } from 'utils/keyFrames';

const Wrapper = styled.div`
  .entering-child-enter, .entering-child-enter-active {
    .page-bookmark {
      transform: translate3d(0, 2000px, 0);
    }
    .page-content {
      transform: translate3d(2000px, 0, 0);
    }
  }
  .entering-child-enter-done {
    .page-bookmark {
      animation: ${fadeIn('bottom')} 1000ms var(--ease-in-out-quart);
    }
    .page-content {
      animation: ${fadeIn('right')} 1000ms 200ms both var(--ease-in-out-quart);
    }
  }
  .exiting-child-exit, .exiting-child-exit-active {
    .page-bookmark {
      ${'' /* animation: ${fadeOut('left')} 1000ms var(--ease-in-out-quart); */}
      animation: ${fadeOut('top')} 1000ms var(--ease-in-out-quart);
    }
    .page-content {
      ${'' /* animation: ${fadeOut('left')} 1000ms both var(--ease-in-out-quart); */}
      animation: ${fadeOut('left')} 1000ms 400ms both var(--ease-in-out-quart);
    }
  }
  .exiting-child-exit-done {
    ${'' /* .page-bookmark {
      transform: translate3d(0, -2000px, 0);
    }
    .page-content {
      transform: translate3d(-2000px, 0, 0);
    } */}
  }
`;

export default Wrapper;
