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
      color: var(--white);
    }
  }

  ${'' /* a {
    display: flex;
    color: var(--black);

    &:visited {
      color: var(--black);
    }
  } */}
`;

export default LangBar;
