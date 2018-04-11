import styled from 'styled-components';

import { fadeIn } from 'utils/keyFrames';
import { paperShadow } from 'utils/componentStyles';

const Content = styled.div`
  display: flex;

  background-color: pink;

  height: 100%;
  width: 100%;

  ${paperShadow}

  animation: ${fadeIn('right')} 1000ms;

  ${'' /* ::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 600px;
    height: 2000px;
    background: rgba(0,0,0,0.4);
    -webkit-transform: skew(0,-12deg);
    transform: skew(0,-12deg);
  } */}
`;

export default Content;
