import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const BasicNavLink = styled(NavLink)`
  font-size: 2.4rem;
  text-decoration: none;
  text-transform: lowercase;

  &:visited {
    color: var(--black);
  }
`;

export default BasicNavLink;
