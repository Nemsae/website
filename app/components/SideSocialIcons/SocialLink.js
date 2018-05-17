import styled from 'styled-components';

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid var(--black);
  border-radius: 50%;
  ${'' /* cursor: pointer; */}
  height: 5rem;
  text-decoration: none;
  width: 5rem;
  &:hover {
    border-color: white;
    text-decoration: none;
    i {
      color: white;
    }
  }
`;

export default SocialLink;
