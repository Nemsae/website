import styled from 'styled-components';

const LangBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;

  span {
    font-size: 12px;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }

  ${'' /* a {
    display: flex;
    color: #1B1819;

    &:visited {
      color: #1B1819;
    }
  } */}
`;

export default LangBar;
