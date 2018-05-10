import styled from 'styled-components';

const SectionContent = styled.div.attrs({ className: 'section-content' })`
  width: 100%;
  max-width: 460px;

  position: relative;

  display: flex;
  flex-direction: column;

  &.offset {
    text-align: right;

    .section-icon {
      left: auto;
      right: -8.7rem;
    }

    .section-list__item {
      align-items: flex-end;
    }

    .section-title {
      background-image: linear-gradient(to left,pink,var(--white));
    }
  }

  &.no-sticky {
    .section-title {
      position: static;
    }
  }

  ${'' /* transition: all 400ms; */}
  transition: transform 400ms;
  :hover {
    transform: scale(1.005);
    ${'' /* box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07); */}
  }
`;

export default SectionContent;
