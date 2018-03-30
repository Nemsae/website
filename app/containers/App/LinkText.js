import styled from 'styled-components';

const LinkText = styled.h2.attrs({ className: 'nav-link_styled' })`
  ${'' /* font-weight: bold; */}
  font-size: 24px;
  text-decoration: none;
  text-transform: lowercase;

  color: #000;

  transition: all 400ms;
`;

export default LinkText;
