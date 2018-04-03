import { transitionAll400 } from 'utils/transitions';

import BasicNavLink from './BasicNavLink';

const StyledNavLink = BasicNavLink.extend.attrs({ className: 'link-text' })`
  color: #000;

  ${transitionAll400}
`;

export default StyledNavLink;
