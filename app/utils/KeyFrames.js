import { keyframes } from 'styled-components';

const directionTransform = (direction) => {
  switch (direction) {
    case 'right':
      return 'transform: translate3d(200rem, 0, 0);';
    case 'left':
      return 'transform: translate3d(-200rem, 0, 0);';
    case 'top':
      return 'transform: translate3d(0, 200rem, 0);';
    case 'bottom':
      return 'transform: translate3d(0, -200rem, 0);';
    default:
      return 'transform: translate3d(200rem, 0, 0);';
  }
};

export const fadeIn = (direction) => {
  const fade = keyframes`
    from {
      ${directionTransform(direction)}
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  `;

  return fade;
};

export const fadeOut = (direction) => {
  const fade = keyframes`
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      ${directionTransform(direction)}
    }
  `;

  return fade;
};

export const opacityIn = () => {
  const opaque = keyframes`
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  `;

  return opaque;
};

export const opacityOut = () => {
  const opaque = keyframes`
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  `;

  return opaque;
};

export const autoAlphaIn = () => {
  const autoAlpha = keyframes`
    0% {
        display: none;
        opacity: 0;
    }

    1% {
        display: block;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
  `;

  return autoAlpha;
};

export const squeezeIn = () => {
  const squeeze = keyframes`
    from {
      max-width: 100%;
      max-height: 100%;
    }

    to {
      max-width: 60rem;
      max-height: 60rem;
    }
  `;

  return squeeze;
};

export const panelMaximize = () => {
  const panelKeyFrame = keyframes`
    from {
      flex-grow: 1;
      min-width: 60rem;
      ${'' /* background: var(--white); */}
    }

    to {
      flex-grow: 10;
      min-width: 60vw;
      ${'' /* background: #f7f7f7; */}
      ${'' /* min-width: 128rem; */}
      ${'' /* min-width: 100%; */}
    }
  `;

  return panelKeyFrame;
};

export const panelMinimize = () => {
  const panelKeyFrame = keyframes`
    from {
      flex-grow: 10;
      min-width: 60vw;
      ${'' /* background: #f7f7f7; */}
    }

    to {
      flex-grow: 1;
      min-width: 60rem;
      ${'' /* background: var(--white); */}
    }
  `;

  return panelKeyFrame;
};

export const panelTitleMaximize = () => {
  const panelTitleKeyFrame = keyframes`
    from {
      font-size: 2vw;
      color: var(--black);
    }

    to {
      font-size: 4vw;
      color: pink;
    }
  `;

  return panelTitleKeyFrame;
};

export const panelTitleMinimize = () => {
  const panelTitleKeyFrame = keyframes`
    from {
      font-size: 4vw;
      color: pink;
    }

    to {
      font-size: 2vw;
      color: var(--black);
    }
  `;

  return panelTitleKeyFrame;
};

export const panelInfoShow = (bool) => {
  let panelInfoKeyFrame;
  if (bool) {
    panelInfoKeyFrame = keyframes`
      from {
        opacity: 0.001;
      }

      to {
        opacity: 1;
      }
    `;
  } else {
    panelInfoKeyFrame = keyframes`
      from {
        opacity: 1;
      }

      to {
        opacity: 0.001;
      }
    `;
  }

  return panelInfoKeyFrame;
};

export default {
  squeezeIn,
  opacityIn,
  opacityOut,
  autoAlphaIn,
  fadeIn,
  fadeOut,
  panelMaximize,
  panelMinimize,
  panelTitleMaximize,
  panelTitleMinimize,
  panelInfoShow,
};
