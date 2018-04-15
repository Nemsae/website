import React from 'react';

import IconWrapper from './IconWrapper';
import SocialIcon from './SocialIcon';
import Wrapper from './Wrapper';

const PageBookmark = () => (
  <Wrapper>
    <IconWrapper href="https://github.com/Nemsae" tabIndex="0" target="_blank" delay={800}>
      <SocialIcon className="fab fa-github-alt" />
    </IconWrapper>
    <IconWrapper href="https://www.linkedin.com/in/jaysonder/" tabIndex="0" target="_blank" delay={600}>
      <SocialIcon className="fab fa-linkedin-in" />
    </IconWrapper>
    <IconWrapper href="mailto:jsson77@gmail.com?subject=John Son - Software Engineer&body=Hi John," tabIndex="0" delay={200}>
      <SocialIcon className="far fa-envelope" />
    </IconWrapper>
    <IconWrapper href="" tabIndex="0" delay={400}>
      <SocialIcon className="far fa-file-alt" />
    </IconWrapper>
  </Wrapper>
);

export default PageBookmark;
