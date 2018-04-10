import styled from 'styled-components';

const Content = styled.main`
  ${''/* grid-area: content; */}
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  overflow: auto;
  ${'' /* height: calc(100% - 240px);
width: calc(100% - 240px); */}
  height: 100%;
  width: 100%;

  ${'' /* background: #F7F7F7;
  border-bottom-left-radius: 80% 10%;
  border-bottom-right-radius: 80% 10%; */}

  ${'' /* box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  :hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  } */}

  ${'' /* @media {'min-width: 600px'} {
    height: 100%;
    width: 100%;
  } */}
`;

export default Content;
