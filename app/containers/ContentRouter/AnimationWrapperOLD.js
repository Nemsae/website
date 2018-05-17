import styled from 'styled-components';

import { fadeIn, fadeOut } from 'utils/keyFrames';

/**
 *
 *  ENTERING Children
 *
 *  .entering-child-enter, .entering-child-enter-active
 *
 *  NOTE: Initial class "state" from which to animate from
 *        children entering left and right
 *
 */

/**
 *
 *  EXITING Children
 *
 *  .exiting-child-enter, .exiting-child-enter-active
 *
 *  NOTE: animate the children to exit "out" of viewport
 *        children exiting left and right
 *
 */

const AnimationWrapper = styled.div`

  .entering-child-enter, .entering-child-enter-active {
    .sub-wrapper {
      transform: translate3d(-200rem, 0, 0);
    }
    .main-wrapper {
      transform: translate3d(200rem, 0, 0);
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
  ${'' /* .exiting-child-exit-done {
    .sub-wrapper {
      transform: translate3d(0, -200rem, 0);
    }
    .main-wrapper {
      transform: translate3d(-200rem, 0, 0);
    }
  } */}
`;

export default AnimationWrapper;
