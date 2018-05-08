import styled from 'styled-components';

import { fadeIn, fadeOut } from 'utils/keyFrames';

const aniEnterTime = 600;
const aniExitTime = 600;

const AnimationWrapper = styled.div`
  ${'' /*
    NOTE: ABOUT PAGE ANIMATIONS
    NOTE: CONTACT PAGE ANIMATIONS
          SUB (L -> R)
          MAIN (T -> B)
  */}
  .about-page__pushed {
    .sub-wrapper {
      transform: translate3d(-2000px, 0, 0);
    }
    .main-wrapper {
      transform: translate3d(2000px, 0, 0);
    }
  }
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
      animation: ${fadeIn('left')} ${aniEnterTime}ms both var(--ease-out-quart);
    }
    .main-wrapper {
      animation: ${fadeIn('right')} ${aniEnterTime}ms both var(--ease-out-quart);
    }
  }
  .about-page-exit, .about-page-exit-active, .contact-page-exit, .contact-page-exit-active {
    .sub-wrapper {
      animation: ${fadeOut('left')} ${aniExitTime}ms both var(--ease-in-quart);
    }
    .main-wrapper {
      animation: ${fadeOut('right')} ${aniExitTime}ms both var(--ease-in-quart);
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
      animation: ${fadeIn('left')} ${aniEnterTime}ms both var(--ease-out-quart);
    }
    .main-wrapper {
      animation: ${fadeIn('bottom')} ${aniEnterTime}ms both var(--ease-out-quart);
    }
  }
  .projects-page-exit, .projects-page-exit-active {
    .sub-wrapper {
      animation: ${fadeOut('left')} ${aniExitTime}ms both var(--ease-in-quart);
    }
    .main-wrapper {
      animation: ${fadeOut('top')} ${aniExitTime}ms both var(--ease-in-quart);
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
      animation: ${fadeIn('bottom')} ${aniEnterTime}ms both var(--ease-out-quart);
    }
    .main-wrapper {
      animation: ${fadeIn('top')} ${aniEnterTime}ms both var(--ease-out-quart);
    }
  }
  .not-found-page-exit, .not-found-page-exit-active {
    .sub-wrapper {
      animation: ${fadeOut('bottom')} ${aniExitTime}ms both var(--ease-in-quart);
    }
    .main-wrapper {
      animation: ${fadeOut('top')} ${aniExitTime}ms both var(--ease-in-quart);
    }
  }
`;

export {
  aniEnterTime,
  aniExitTime,
};

export default AnimationWrapper;
