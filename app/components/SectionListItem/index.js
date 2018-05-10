import styled from 'styled-components';

const SectionListItem = styled.li.attrs({ className: 'section-list__item' })`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 5rem 0 5rem;
  padding: 5rem 5rem;
  ${'' /* box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07); */}
  border: 0.5rem solid #1B1919;
  ${'' /* box-shadow: 2rem 2rem 0rem var(--black), 0 1px 2px rgba(0,0,0,0.24); */}
  ${'' /* box-shadow: 2rem 2rem 0rem rgba(0,0,0,0.12), 2rem 2rem 0rem rgba(0,0,0,0.24); */}
`;

export default SectionListItem;
