import styled from 'styled-components';

const CrumbBackSlash = styled.span.attrs({ className: 'crumb__back-slash' })`
  ::before {
    content: '/';
    background: transparent;
    color: #FEC0C1;
    ${'' /* color: #FFF;
    mix-blend-mode: difference; */}
  }
`;

export default CrumbBackSlash;
