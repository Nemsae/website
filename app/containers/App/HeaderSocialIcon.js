import styled from 'styled-components';

const HeaderSocialIcon = styled.a`
  color: var(--white);

  font-size: 1.6rem;

  transition: all 300ms;

  &:hover {
    transform: scale(1.3);
    color: pink;
  }

  &:visited {
    color: var(--white);
  }
`;

export default HeaderSocialIcon;
