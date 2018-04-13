import NormalH2 from 'components/H2';

import { fadeIn, opacityIn } from 'utils/keyFrames';

const H2 = NormalH2.extend`
  line-height: 1.1;
  opacity: 0;

  animation: ${fadeIn('left')} 1000ms 1400ms var(--ease-out-expo), ${opacityIn()} 1000ms 1400ms;
  animation-fill-mode: forwards;

  b {
    font-size: 5.2rem;
  }
`;

export default H2;
