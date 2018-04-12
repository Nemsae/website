import styled from 'styled-components';

import { fadeIn } from 'utils/keyFrames';
import { paperShadow } from 'utils/componentStyles';

const Content = styled.div.attrs({ className: 'page-content' })`
  display: flex;

  background-color: pink;

  height: 100%;
  width: 100%;

  ${paperShadow}

  ${'' /* animation: ${fadeIn('right')} 1000ms 200ms both var(--ease-in-out-quart); */}
`;

export default Content;
