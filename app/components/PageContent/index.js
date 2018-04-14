import styled from 'styled-components';

import { paperShadow } from 'utils/componentStyles';

const PageContent = styled.div.attrs({ className: 'page-content' })`
  display: flex;

  background-color: pink;

  height: 100%;
  width: 100%;

  ${paperShadow}
`;

export default PageContent;
