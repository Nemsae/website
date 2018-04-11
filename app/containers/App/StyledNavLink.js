import { transitionAll } from 'utils/transitions';

import BasicNavLink from './BasicNavLink';

const StyledNavLink = BasicNavLink.extend.attrs({ className: 'link-text' })`
  color: #000;

  ${transitionAll(400)}
`;

export default StyledNavLink;
