import styled from 'styled-components';

import { fadeIn, opacityIn } from 'utils/keyFrames';

const SubHeader = styled.article.attrs({ className: 'sub-header' })`
  position: absolute;
  bottom: -0.4rem;
  right: 6rem;

  display: flex;
  align-items: flex-end;
  flex-direction: column;

  opacity: 0;
  animation: ${fadeIn('top')} 2000ms 1000ms var(--ease-out-quint),
             ${opacityIn()} 8000ms 1000ms var(--ease-out-expo);
  ${'' /* animation: ${opacityIn()} 4000ms 1600ms; */}
  animation-fill-mode: both;
`;

export default SubHeader;
