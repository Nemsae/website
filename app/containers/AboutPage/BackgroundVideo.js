import styled from 'styled-components';

import { opacityIn } from 'utils/keyFrames';

const BackgroundVideo = styled.video`
  height: 100%;

  background: transparent;

  animation: ${opacityIn()} 11100ms;

  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  &:hover {
  }
`;

export default BackgroundVideo;
