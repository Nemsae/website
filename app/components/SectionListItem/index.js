import styled from 'styled-components';

const SectionListItem = styled.li.attrs({ className: 'section-list__item' })`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 10rem;

  ${'' /* taken care of up in .section-content
  &.offset {
    align-items: flex-end;
  } */}
`;

export default SectionListItem;
