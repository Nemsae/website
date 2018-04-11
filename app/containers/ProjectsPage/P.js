import NormalP from 'components/P';

import { fadeIn, opacityIn } from 'utils/keyFrames';

const P = NormalP.extend`
  opacity: 0;

  animation: ${fadeIn('top')} 700ms 1000ms, ${opacityIn()} 700ms 1000ms;
  animation-fill-mode: forwards;
`;

export default P;
