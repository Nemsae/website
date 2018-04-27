import styled from 'styled-components';

import { fadeIn, fadeOut } from 'utils/keyFrames';

const AnimationWrapper = styled.div`
  ${'' /*
    NOTE: ABOUT PAGE ANIMATIONS
    NOTE: CONTACT PAGE ANIMATIONS
          SUB (L -> R)
          MAIN (T -> B)
  */}
  .about-page-enter, .about-page-enter-active, .contact-page-enter, .contact-page-enter-active {
    .sub-wrapper {
      transform: translate3d(-2000px, 0, 0);
    }
    .main-wrapper {
      transform: translate3d(2000px, 0, 0);
    }
  }
  .about-page-enter-done, .contact-page-enter-done {
    .sub-wrapper {
      animation: ${fadeIn('left')} 1000ms both var(--ease-in-out-quart);
    }
    .main-wrapper {
      animation: ${fadeIn('right')} 1000ms both var(--ease-in-out-quart);
    }
  }
  .about-page-exit, .about-page-exit-active, .contact-page-exit, .contact-page-exit-active {
    .sub-wrapper {
      animation: ${fadeOut('left')} 1000ms both var(--ease-in-out-quart);
    }
    .main-wrapper {
      animation: ${fadeOut('right')} 1000ms both var(--ease-in-out-quart);
    }
  }

  ${'' /*
    NOTE: PROJECTS PAGE ANIMATIONS
          SUB (L -> R)
          MAIN (T -> B)
  */}
  .projects-page-enter, .projects-page-enter-active {
    .sub-wrapper {
      transform: translate3d(-2000px, 0, 0);
    }
    .main-wrapper {
      transform: translate3d(0, 2000px, 0);
    }
  }
  .projects-page-enter-done {
    .sub-wrapper {
      animation: ${fadeIn('left')} 1000ms both var(--ease-in-out-quart);
    }
    .main-wrapper {
      animation: ${fadeIn('bottom')} 1000ms both var(--ease-in-out-quart);
    }
  }
  .projects-page-exit, .projects-page-exit-active {
    .sub-wrapper {
      animation: ${fadeOut('left')} 1000ms both var(--ease-in-out-quart);
    }
    .main-wrapper {
      animation: ${fadeOut('top')} 1000ms both var(--ease-in-out-quart);
    }
  }

  ${'' /*
    NOTE: not-found PAGE ANIMATIONS
          SUB (L -> R)
          MAIN (T -> B)
  */}
  .not-found-page-enter, .not-found-page-enter-active {
    .sub-wrapper {
      transform: translate3d(0, 2000px, 0);
    }
    .main-wrapper {
      transform: translate3d(0, -2000px, 0);
    }
  }
  .not-found-page-enter-done {
    .sub-wrapper {
      animation: ${fadeIn('bottom')} 1000ms both var(--ease-in-out-quart);
    }
    .main-wrapper {
      animation: ${fadeIn('top')} 1000ms both var(--ease-in-out-quart);
    }
  }
  .not-found-page-exit, .not-found-page-exit-active {
    .sub-wrapper {
      animation: ${fadeOut('bottom')} 1000ms both var(--ease-in-out-quart);
    }
    .main-wrapper {
      animation: ${fadeOut('top')} 1000ms both var(--ease-in-out-quart);
    }
  }
`;

export default AnimationWrapper;
