import styled from 'styled-components';

const LinkWrapper = styled.a.attrs({ className: 'link-wrapper' })`
  :active {
    .bg-text__word-romanized {
      color: var(--black);
      background: var(--white);
      border: 0.5rem solid var(--black);

      font-size: 6rem;
      width: 40rem;
      height: 10rem;
    }
  }
`;

export default LinkWrapper;
