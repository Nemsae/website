import styled from 'styled-components';

const SectionListItem = styled.li.attrs({ className: 'section-list__item' })`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 5rem 0 5rem;
  padding: 5rem 5rem;
  ${'' /* border: 2px solid black; */}
  ${'' /* border-radius: 4px; */}
  ${'' /* box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07); */}
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

export default SectionListItem;
