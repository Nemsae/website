import NormalSectionIntroSubTitle from 'components/SectionIntroSubTitle';

const SectionIntroSubTitleStyled = NormalSectionIntroSubTitle.extend`
  max-width: 275px;
  color: #1B1819;

  margin-left: 2rem;

  position: relative;

  b {
    color: green;

    ::before {
      content: " ";
      height: 1rem;
      width: 1rem;
      border-radius: 50%;

      position: absolute;
      left: -2rem;
      top: 50%;
      transform: translateY(-50%);

      background-color: green;
    }
  }
`;

export default SectionIntroSubTitleStyled;