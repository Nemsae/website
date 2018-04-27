import styled from 'styled-components';

const SectionScrollDown = styled.a`
  height: 7rem;
  width: 0.4rem;

  margin-top: 7rem;
  position: relative;

  background: pink;
  box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);

  transition: all 400ms;

  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.5rem;

    border-right: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1rem solid pink;
    border-top: 1rem solid pink;
  }

  :hover {
    transform: scale(1.2);
  }
`;

export default SectionScrollDown;
