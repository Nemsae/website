import styled from 'styled-components';

const BackSlash = styled.span.attrs({ className: 'crumb__back-slash' })`
  ::before {
    content: '/';
    color: #FEC0C1;
  }
`;

export default BackSlash;
