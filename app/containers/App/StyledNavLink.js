import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink).attrs({ className: 'nav-link_styled' })`
  ${'' /* font-weight: bold; */}
  font-size: 24px;
  text-decoration: none;
  text-transform: lowercase;

  color: #000;

  transition: all 400ms;
`;

export default StyledNavLink;
