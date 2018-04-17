import styled from 'styled-components';

const Wrapper = styled.article.attrs({ className: 'bg-text__container' })`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export default Wrapper;
