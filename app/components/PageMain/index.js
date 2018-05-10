import styled from 'styled-components';

import { paperShadow } from 'utils/componentStyles';

const PageMain = styled.div.attrs({ className: 'page-content' })`
  display: flex;

  background-color: pink;

  height: 100%;
  width: 100%;

  ${paperShadow}

  ${'' /* background: rgba(0, 0, 0, 0.85);

  transition: all 400ms;
  :hover {
    background: var(--white);
  } */}
`;

export default PageMain;
