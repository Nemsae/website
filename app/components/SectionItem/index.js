import styled from 'styled-components';

const SectionItem = styled.div.attrs({ className: 'section-item' })`
  width: 325px;

  display: flex;
  flex-direction: column;

  color: #1B1919;

  align-self: flex-start;
  &.offset {
    align-self: flex-end;
  }

  border-top: 2px solid #1B1919;
  ${'' /* &::before {
    width: 100%;
    height: 4px;
    background-color: #1B1919;
  } */}

  ${'' /* transition: all 400ms;
  &:not(:hover) {
    opacity: 0.3 !important;
  } */}
`;

export default SectionItem;
