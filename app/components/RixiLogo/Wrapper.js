import styled from 'styled-components';

const Wrapper = styled.div.attrs({ className: 'rixi-logo__wrapper' })`
  position: relative;

  transform: rotate(-40deg);
  transition: all 400ms;

  color: var(--black);
`;

export default Wrapper;
