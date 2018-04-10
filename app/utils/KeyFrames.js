import { keyframes } from 'styled-components';

const directionTransform = (direction) => {
  switch (direction) {
    case 'right':
      return 'transform: translate3d(100%, 0, 0);';
    // case 'rightOut':
    case 'left':
      return 'transform: translate3d(-100%, 0, 0);';
    case 'up':
      return 'transform: translate3d(0, 100%, 0);';
    case 'down':
      return 'transform: translate3d(0, -100%, 0);';
    default:
      return 'transform: translate3d(100%, 0, 0);';
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

export const fadeOut = () => {
  const fade = keyframes`
    from {
    }

    to {
      transform: translate3d(-100%, 0, 0);
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

export const squeezeIn = () => {
  const squeeze = keyframes`
    from {
      max-width: 100%;
      max-height: 100%;
    }

    to {
      max-width: 600px;
      max-height: 600px;
    }
  `;

  return squeeze;
};

export default {
  squeezeIn,
  opacityIn,
  fadeIn,
  fadeOut,
};
