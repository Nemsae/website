import styled from 'styled-components';

import { paperShadow } from 'utils/componentStyles';

const PageBookmark = styled.div.attrs({ className: 'page-bookmark' })`
  background-color: pink;

  height: 100%;
  width: 150px;

  margin-left: 25px;
  margin-right: 25px;

  ${paperShadow}
`;

export default PageBookmark;
