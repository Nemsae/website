import styled from 'styled-components';

import { fadeIn, opacityIn } from 'utils/keyFrames';

const SubHeader = styled.article.attrs({ className: 'sub-header' })`
  position: absolute;
  bottom: -0.4rem;
  right: 6rem;

  display: flex;
  align-items: flex-end;
  flex-direction: column;

  animation: ${fadeIn('top')} 1000ms 1500ms var(--ease-out-expo), ${opacityIn()} 1000ms 1500ms;
  animation-fill-mode: both;
`;

export default SubHeader;
