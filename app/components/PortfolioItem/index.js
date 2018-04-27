import styled from 'styled-components';

const PortfolioItem = styled.div.attrs({ className: 'portfolio-item' })`
  display: flex;
  position: relative;

  min-height: 60rem;
  padding: 20rem 0;
`;

export default PortfolioItem;
