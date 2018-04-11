import NormalP from 'components/P';

import { fadeIn, opacityIn } from 'utils/keyFrames';

const P = NormalP.extend`
  opacity: 0;

  animation: ${fadeIn('top')} 1000ms 600ms, ${opacityIn()} 1000ms 600ms;
  animation-fill-mode: forwards;
`;

export default P;
