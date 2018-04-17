import styled from 'styled-components';

const PageWrapper = styled.div.attrs({ className: 'page-wrapper' })`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  .left-quote-svg, .right-quote-svg {
    transition: all 400ms;
    :hover {
      ${'' /* transform: scale(1.3) rotate(20deg); */}
      transform: rotate(20deg);
    }
  }
`;

export default PageWrapper;
