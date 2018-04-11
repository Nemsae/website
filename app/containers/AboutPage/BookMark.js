import styled from 'styled-components';

import { opacityIn } from 'utils/keyFrames';
import { paperShadow } from 'utils/componentStyles';

const BookMark = styled.div`
  background-color: pink;

  height: 100%;
  width: 150px;

  margin-left: 15px;
  margin-right: 15px;

  ${paperShadow}

  animation: ${opacityIn()} 1000ms;
`;

export default BookMark;
