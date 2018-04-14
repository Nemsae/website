import styled from 'styled-components';

const PageWrapper = styled.div.attrs({ className: 'page-wrapper mx-auto' })`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 1200px;

  height: 100%;

  padding-bottom: 120px;
  padding-top: 120px;
`;

export default PageWrapper;
