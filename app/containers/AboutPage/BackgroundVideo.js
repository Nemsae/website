import styled from 'styled-components';

import { opacityIn } from 'utils/keyFrames';

const BackgroundVideo = styled.video`
  height: 100%;

  background: transparent;

  animation: ${opacityIn()} 11100ms;
`;

export default BackgroundVideo;
