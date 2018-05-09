import styled from 'styled-components';

const PanelHeader = styled.div.attrs({ className: 'panel__header' })`
  margin-bottom: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default PanelHeader;
