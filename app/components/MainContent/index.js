import styled from 'styled-components';

const MainContent = styled.div`
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${'' /* padding: 8rem 8rem; */}
  .section-content:first-child {
    margin-top: 8rem;
  }

  .section-content + .section-content {
    margin-top: 16rem;-
  }
`;

export default MainContent;
