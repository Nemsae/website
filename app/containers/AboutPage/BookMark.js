import styled from 'styled-components';

import { opacityIn } from 'utils/keyFrames';

const BookMark = styled.div`
  background-color: pink;

  height: 100%;
  width: 150px;

  margin-left: 15px;
  margin-right: 15px;

  animation: ${opacityIn()} 1000ms;

  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

export default BookMark;
