import styled from 'styled-components';

import { fadeIn } from 'utils/keyFrames';
import { paperShadow } from 'utils/componentStyles';

const Content = styled.div`
  display: flex;

  background-color: pink;

  height: 100%;
  width: 100%;

  ${paperShadow}

  animation: ${fadeIn('right')} 1000ms 200ms both ease-in-out;
`;

export default Content;
