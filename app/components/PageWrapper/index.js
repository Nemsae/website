import styled from 'styled-components';

const PageWrapper = styled.div.attrs({ className: 'page-wrapper' })`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  .left-quote-svg {
    position: absolute;
    top: 6rem;
    right: 6rem;
    font-size: 10rem;
  }
`;

export default PageWrapper;
