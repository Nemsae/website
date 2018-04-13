import NormalP from 'components/P';

import { fadeIn, opacityIn } from 'utils/keyFrames';

const P = NormalP.extend`
  opacity: 0;

  animation: ${fadeIn('top')} 1200ms 1800ms, ${opacityIn()} 1200ms 1800ms;
  animation-fill-mode: forwards;
`;

export default P;
