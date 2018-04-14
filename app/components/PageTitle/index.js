import NormalH2 from 'components/H2';

import { fadeIn, opacityIn } from 'utils/keyFrames';

const PageTitle = NormalH2.extend`
  line-height: 1.1;
  opacity: 0;

  animation: ${fadeIn('left')} 1000ms 1600ms var(--ease-out-expo), ${opacityIn()} 1000ms 1600ms;
  animation-fill-mode: forwards;

  b {
    font-size: 5.2rem;
  }
`;

export default PageTitle;
