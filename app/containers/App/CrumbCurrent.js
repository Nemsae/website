import styled from 'styled-components';

// import { fadeIn, opacityIn } from 'utils/keyFrames';

const CrumbCurrent = styled.b.attrs({ className: 'crumb-current' })`
  ${'' /* animation: ${fadeIn('left')} 1000ms 1100ms var(--ease-out-expo), ${opacityIn()} 1000ms 1100ms;
  animation-fill-mode: forwards; */}
  color: #FFF;
  mix-blend-mode: difference;
`;

export default CrumbCurrent;
