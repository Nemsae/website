// import styled from 'styled-components';
import NormalH2 from 'components/H2';

const SectionTitle = NormalH2.extend.attrs({ className: 'section-title' })`
  font-family: 'Montserrat';
  font-size: 3.5rem;
  margin-bottom: 2.5rem;
  padding: 1rem;

  position: sticky;
  top: 10rem;
  color: white;
  background-image: linear-gradient(to right,pink,#fff);

  // color: black;
  // font-weight: bold;
  // font-size: 6vw;
`;

export default SectionTitle;
