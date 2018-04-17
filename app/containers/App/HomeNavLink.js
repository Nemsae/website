import BasicNavLink from './BasicNavLink';

const StyledNavLink = BasicNavLink.extend.attrs({ className: 'link-text' })`
  font-family: 'Montserrat';
  text-transform: uppercase;
  transition: all 400ms;
`;

export default StyledNavLink;
