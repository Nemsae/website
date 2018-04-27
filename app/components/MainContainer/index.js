import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  max-width: 1280px;

  position: relative;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  .section-content:first-child {
    margin-top: 8rem;
  }

  .section-content + .section-content {
    margin-top: 16rem;-
  }
`;

export default MainContainer;
