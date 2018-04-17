import styled from 'styled-components';

import { fadeIn, opacityIn } from 'utils/keyFrames';

const CrumbCurrent = styled.b.attrs({ className: 'crumb-current' })`
  ${'' /* opacity: 0; */}

  animation: ${fadeIn('left')} 1000ms 1100ms var(--ease-out-expo), ${opacityIn()} 1000ms 1100ms;
  animation-fill-mode: forwards;
`;

export default CrumbCurrent;
