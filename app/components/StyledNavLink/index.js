import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  color: inherit;

  :visited, :hover {
    color: inherit;
    text-decoration: none;
  }
`;

export default StyledNavLink;
