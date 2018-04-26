import NormalItemInfo from 'components/ItemInfo';
// import styled from 'styled-components';

const ListItemInfo = NormalItemInfo.extend.attrs({ className: 'list__item-info' })`
  font-size: 2rem;
  margin: 1rem 0;
`;

// const ListItemInfo = styled.p.attrs({ className: 'list__item-info' })`
//   color: #fff;
//   background: #000;
//
//   font-family: monospace;
//   font-size: 2.8rem;
//   text-align: right;
//   line-height: 1.1;
//   letter-spacing: 0.4rem;
//
//   margin: 0;
//   padding: 0;
//   margin-top: 6rem;
//   padding: 0.8rem 1rem;
//   width: 37rem;
// `;

export default ListItemInfo;
