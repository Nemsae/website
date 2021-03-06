import NormalItemInfo from 'components/ItemInfo';
// import styled from 'styled-components';

const CardInfo = NormalItemInfo.extend.attrs({ className: 'card__info' })`
  font-size: 2rem;
  margin: 1rem 0;
`;

// const CardInfo = styled.p.attrs({ className: 'list__item-info' })`
//   color: var(--white);
//   background: var(--black);
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

export default CardInfo;
