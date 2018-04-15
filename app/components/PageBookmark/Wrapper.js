import styled from 'styled-components';

import { paperShadow } from 'utils/componentStyles';

const Wrapper = styled.div.attrs({ className: 'page-bookmark' })`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  height: 100%;
  width: 150px;

  margin-left: 25px;
  margin-right: 25px;

  ${paperShadow}
`;

export default Wrapper;
