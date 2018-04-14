import { keyframes } from 'styled-components';

export const browRaise1 = keyframes`
  0% {
    top: 120px;
  }

  30% {
    top: 120px;
  }

  70% {
    top: 80px;
  }

  80% {
    top: 120px;
  }

  100% {
    top: 120px;
  }
`;

export const browRaise2 = keyframes`
  0% {
    top: 58px;
  }

  30% {
    top: 58px;
  }

  70% {
    top: 18px;
  }

  80% {
    top: 58px;
  }

  100% {
    top: 58px;
  }
`;

export const blink = keyframes`
  0% {
    height: 160px;
    border-radius: 50%;
  }

  15% {
    box-shadow: 100px 240px 0 0 currentColor;
  }

  30% {
    box-shadow: 120px 240px 0 0 currentColor;
  }

  //  EYE BLINK
  48% {
    height: 160px;
    border-radius: 50%;
    box-shadow: 120px 240px 0 0 currentColor;
  }

  50% {
    height: 5px;
    border-radius: 0%;
    box-shadow: 120px 280px 0 0 currentColor;
  }

  55% {
    height: 160px;
    border-radius: 50%;
    box-shadow: 120px 240px 0 0 currentColor;
  }

  //  EYE LOOKS RIGHT
  70% {
    box-shadow: 140px 240px 0 0 currentColor;
  }

  85% {
    box-shadow: 120px 240px 0 0 currentColor;
  }

  100% {
    height: 160px;
    border-radius: 50%;
  }
`;

export default {
  blink,
  browRaise1,
  browRaise2,
};
