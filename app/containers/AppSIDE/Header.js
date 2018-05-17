import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
  z-index: 1000;

  border-right: 1px solid #ECEBEB;
  background-color: var(--white);

  transition: margin 600ms cubic-bezier(0.77, 0, 0.175, 1);

  ${'' /* overflow: hidden;
  float: left;
  width: 10rem;
  height: 100vh; */}
`;

export default Header;
