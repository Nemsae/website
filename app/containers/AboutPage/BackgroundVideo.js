import styled from 'styled-components';

import { opacityIn } from 'utils/keyFrames';

const BackgroundVideo = styled.video`
  height: 100%;

  background: transparent;

  @keyframes expandOutIn {
    from {
      transform: scale(2);
    }

    to {
      transform: scale(1);
    }
  }

  animation: ${opacityIn()} 6000ms, expandOutIn 2000ms;
`;

export default BackgroundVideo;
