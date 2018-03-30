import BasicNavLink from './BasicNavLink';

const StyledNavLink = BasicNavLink.extend.attrs({ className: 'nav-link_styled' })`
  font-family: 'Montserrat';
  text-transform: uppercase;
`;

export default StyledNavLink;
