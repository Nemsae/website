import NormalH2 from 'components/H2';

const CardTitle = NormalH2.extend.attrs({ className: 'card__title' })`
  font-size: 8rem;
  font-weight: 400;
  text-transform: lowercase;
  line-height: 0.65;
  color: pink;
`;

export default CardTitle;
