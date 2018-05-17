import styled from 'styled-components';

const MainContent = styled.div`
  width: 100%;
  max-width: 128rem;

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

export default MainContent;
