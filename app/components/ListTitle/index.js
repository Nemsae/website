import styled from 'styled-components';

const ListItemTitle = styled.h1.attrs({ className: 'list__title' })`
  font-size: 4vw;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  line-height: 1.1;

  b {
    ${'' /* font-family: 'Raleway', serif; */}
    font-weight: 100;
  }
`;

export default ListItemTitle;
