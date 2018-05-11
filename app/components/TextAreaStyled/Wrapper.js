import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin-top: 6rem;

  svg {
    position: absolute;
    color: var(--black);
    transition: color 400ms;
  }
  .left-quote-svg {
    top: -4rem;
    left: -6rem;
  }
  .right-quote-svg {
    bottom: -4rem;
    right: -6rem;
  }

  &.white {
    svg {
      color: var(--white);
    }
  }
  &.black {
    svg {
      color: var(--black);
    }
  }
`;

export default Wrapper;
