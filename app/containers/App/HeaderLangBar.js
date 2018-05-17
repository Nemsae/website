import styled from 'styled-components';

const HeaderLangBar = styled.div`
  position: absolute;
  top: 4rem;
  right: 4rem;
  z-index: 3;

  display: flex;

  a + a {
    margin-left: 2rem;
  }
`;

export default HeaderLangBar;
