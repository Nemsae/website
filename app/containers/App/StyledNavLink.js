import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  color: palevioletred;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  position: absolute;
  bottom: 0;
  right: 0;
`;

export default StyledNavLink;
