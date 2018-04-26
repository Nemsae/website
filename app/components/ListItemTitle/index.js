import NormalH2 from 'components/H2';

const ListItemTitle = NormalH2.extend.attrs({ className: 'list__item-title' })`
  font-size: 8rem;
  font-weight: 100;
  text-transform: lowercase;
  line-height: 0.8;
  color: #1B1919;
`;

export default ListItemTitle;
