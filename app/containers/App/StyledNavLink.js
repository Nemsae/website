import BasicNavLink from './BasicNavLink';

const StyledNavLink = BasicNavLink.extend.attrs({ className: 'nav-link_styled' })`
  color: #000;

  transition: all 400ms;
`;

export default StyledNavLink;
