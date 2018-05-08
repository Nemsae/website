import styled from 'styled-components';

const P = styled.p`
  position: relative;
  margin: 0;

  i.material-icons {
    position: absolute;
    top: 0;
    right: -25px;
  }

  b {
    font-size: 26px;
  }

  a {
    color: #1B1819;
    text-decoration: none;

    &:visited {
      color: #1B1819;
    }
    &:hover {
      color: #F7CA18 !important;
    }
  }
`;

export default P;
