import React from 'react';

import SocialLink from './SocialLink';
import Wrapper from './Wrapper';

// export default class SideSocialIcons extends React.PureComponent {
//
// }

export const SideSocialIcons = () => (
  <Wrapper id="social-icons-ux" className="hidden-xs">
    <SocialLink className="circle-icon" href="" target="_blank" tabIndex="-1">
      <i className="fa fa-facebook fa-2x"></i>
    </SocialLink>
    <SocialLink className="circle-icon" href="" target="_blank" tabIndex="-1">
      <i className="fa fa-twitter fa-2x"></i>
    </SocialLink>
    <SocialLink className="circle-icon" href="" target="_blank" tabIndex="-1">
      <i className="fa fa-instagram fa-2x"></i>
    </SocialLink>
    <SocialLink className="circle-icon" href="" target="_blank" tabIndex="-1">
      <i className="fa fa-linkedin fa-2x"></i>
    </SocialLink>
    <SocialLink className="circle-icon" href="mailto:jsson77@gmail.com?subject=John Son - Software Engineer&body=Hi John," tabIndex="-1">
      <i className="fa fa-envelope fa-2x"></i>
    </SocialLink>
  </Wrapper>
);

export default SideSocialIcons;
