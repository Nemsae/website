export const paperShadow = () => (
  `
    background: #fff;

    box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);

    border-radius: 4px;
  `
);

export const paperShadowHover = () => (
  `box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 35px rgba(50,50,93,.1), 0 8px 15px rgba(0,0,0,.07);
  }`
);

export default {
  paperShadow,
  paperShadowHover,
};
