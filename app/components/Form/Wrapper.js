import styled from 'styled-components';

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;

  margin: 5rem auto;

  &.valid {
    svg.left-quote-svg, svg.right-quote-svg {
      color: pink;
    }
  }
`;

export default Wrapper;
