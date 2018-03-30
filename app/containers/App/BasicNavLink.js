import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const BasicNavLink = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  text-transform: lowercase;

  &:visited {
    color: black;
  }
`;

export default BasicNavLink;
