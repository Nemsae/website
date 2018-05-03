import NormalSectionIntroTitle from 'components/SectionIntroTitle';

const SectionHeroTitle = NormalSectionIntroTitle.extend.attrs({ className: 'section-hero__title' })`
  font-size: 6rem;
  margin: 0;

  padding: 7rem 0;
  border-bottom: 2px solid;
  border-top: 2px solid;
`;

export default SectionHeroTitle;
