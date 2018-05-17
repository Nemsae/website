import styled from 'styled-components';

const Menu = styled.nav`
  ${''/* display: flex; */}

  transform: rotate(270deg);

  margin-top: 15rem;

  &:before {
    position: absolute;
    content: "";
    height: 2px;
    width: 3rem;
    background-color: #949495;
    left: -5rem;
    top: 6px;
  }

  ${'' /* position: absolute;
  right: 50%;
  top: 50%;

  transform: rotate(270deg) translateY(350%); */}
`;

export default Menu;
