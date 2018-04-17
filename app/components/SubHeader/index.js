import styled from 'styled-components';

const SubHeader = styled.article.attrs({ className: 'sub-header' })`
  position: absolute;
  bottom: -1.1rem;
  right: 6rem;

  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export default SubHeader;
