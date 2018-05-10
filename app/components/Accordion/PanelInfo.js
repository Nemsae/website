import styled from 'styled-components';

const PanelInfo = styled.div.attrs({ className: 'panel__info' })`
  width: 80%;
  ${'' /* max-width: calc(60% * 1280px); */}
  height: 60vh;
  margin: 4rem 0;
  border: 4px solid var(--black);
`;

export default PanelInfo;
