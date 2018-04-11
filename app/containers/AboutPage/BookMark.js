import styled from 'styled-components';

import { opacityIn, fadeIn } from 'utils/keyFrames';
import { paperShadow } from 'utils/componentStyles';

const BookMark = styled.div`
  background-color: pink;

  height: 100%;
  width: 150px;

  margin-left: 25px;
  margin-right: 25px;

  ${paperShadow}

  animation: ${fadeIn('left')} 1000ms;
`;

export default BookMark;
