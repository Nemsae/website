import styled from 'styled-components';

const PageWrapper = styled.article.attrs({ className: 'page-wrapper' })`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  ${''/* NOTE: if page is utilizing quote svgs */}
  .left-quote-svg, .right-quote-svg {
    transition: all 400ms;
    :hover {
      transform: scale(1.1) rotate(20deg);
    }
  }

  ${'' /* &.fd-row {
    flex-direction: row;
  } */}
  &.fd-column {
    flex-direction: column;
  }
`;

export default PageWrapper;
