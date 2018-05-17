import styled from 'styled-components';

const HeaderSocials = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  top: 4rem;
  right: 0;
  z-index: 3;

  padding: 1rem 6rem;
  height: 4rem;
  box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);

  a + a {
    margin-left: 3rem;
  }

  background-color: var(--black);

  ::before {
    content: '';
    position: absolute;
    top: 0rem;
    left: -4rem;
    height: 4rem;
    width: 4rem;
    border-top: 2rem solid var(--black);
    border-bottom: 2rem solid var(--black);
    border-left: 2rem solid transparent;
  }
  ::after {
    content: '';
    position: absolute;
    bottom: 0rem;
    left: -4rem;
    height: 1rem;
    width: 4rem;
    box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
  }
`;

export default HeaderSocials;
