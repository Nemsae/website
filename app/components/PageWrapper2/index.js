import styled from 'styled-components';

const PageWrapper = styled.div.attrs({ className: 'page-wrapper mx-auto' })`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 120rem;

  height: 100%;

  padding-bottom: 12rem;
  padding-top: 12rem;
`;

export default PageWrapper;
