import styled from 'styled-components';

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #1B1819;
  border-radius: 50%;
  ${'' /* cursor: pointer; */}
  height: 50px;
  text-decoration: none;
  width: 50px;
  &:hover {
    border-color: white;
    text-decoration: none;
    i {
      color: white;
    }
  }
`;

export default SocialLink;
