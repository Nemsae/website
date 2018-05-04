import styled from 'styled-components';

const HeaderSocials = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  top: 40px;
  right: 0;
  z-index: 3;

  padding: 1rem 6rem;
  height: 4rem;

  a + a {
    margin-left: 3rem;
  }

  background-color: #1B1819;

  ::before {
    content: '';
    position: absolute;
    top: 0rem;
    left: -4rem;
    height: 4rem;
    width: 4rem;
    border-top: 2rem solid #1B1819;
    border-bottom: 2rem solid #1B1819;
    border-left: 2rem solid transparent;
  }
`;

export default HeaderSocials;
