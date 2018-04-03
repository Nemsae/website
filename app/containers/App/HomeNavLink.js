import BasicNavLink from './BasicNavLink';

const StyledNavLink = BasicNavLink.extend.attrs({ className: 'link-text' })`
  font-family: 'Montserrat';
  text-transform: uppercase;
`;

export default StyledNavLink;
