import styled from 'styled-components';

const Input = (props) => {
  const InputPrimitive = styled.input.attrs({ className: 'input' })`
    margin: 0;
    padding-left: 1rem;
    text-align: left;
    transition: all 400ms;

    &:hover, &::selection {
      &.black {
        border: 0.5rem solid var(--white);
      }
      &.white {
        border: 0.5rem solid var(--black);
      }
    }
  `;
  return (
    <InputPrimitive {...props} />
  );
};

export default Input;
