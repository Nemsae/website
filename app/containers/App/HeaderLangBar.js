import styled from 'styled-components';

const HeaderLangBar = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;

  display: flex;

  a + a {
    margin-left: 20px;
  }
`;

export default HeaderLangBar;
