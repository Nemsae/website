import styled from 'styled-components';
import { transitionAll400 } from 'utils/transitions';

const LinkText = styled.h2.attrs({ className: 'nav-link_styled' })`
  ${'' /* font-weight: bold; */}
  font-size: 24px;
  text-decoration: none;
  text-transform: lowercase;

  color: #000;

  ${transitionAll400}
`;

export default LinkText;
