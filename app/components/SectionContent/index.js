import styled from 'styled-components';

const SectionContent = styled.div.attrs({ className: 'section-content' })`
  width: 100%;
  max-width: 460px;

  position: relative;

  display: flex;
  flex-direction: column;

  margin-bottom: 16rem;

  &.offset {
    text-align: right;

    .section-icon {
      left: auto;
      right: -8.7rem;
    }
  }

  ${'' /* transition: all 400ms; */}
  transition: transform 400ms;
  :hover {
    transform: scale(1.1);
    ${'' /* box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07); */}
  }
`;

export default SectionContent;
