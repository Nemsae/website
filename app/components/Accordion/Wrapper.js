import styled from 'styled-components';

const Wrapper = styled.article`
  overflow: hidden;
  height: 100vh;
  ${'' /* width: 100%; */}

  display: flex;
  flex-direction: column;

  .panel + .panel {
    border-top: 2px solid #1B1819;
  }
`;

export default Wrapper;
