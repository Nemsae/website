import BasicNavLink from './BasicNavLink';
import { transitionAll400 } from 'utils/transitions';

const StyledNavLink = BasicNavLink.extend.attrs({ className: 'link-text' })`
  color: #000;

  ${transitionAll400}
`;

export default StyledNavLink;
