import styled from 'styled-components';

const SubHeaderSubTitle = styled.h3.attrs({ className: 'sub-header__sub-title' })`
  font-size: 8rem;
  color: #fff;

  line-height: 1;
  text-align: right;
  text-transform: lowercase;

  margin: 0;
  color: transparent;
  background-image: -webkit-linear-gradient(top, pink, #fff); /* For Chrome and Safari */
  background-image:    -moz-linear-gradient(top, pink, #fff); /* For old Fx (3.6 to 15) */
  background-image:     -ms-linear-gradient(top, pink, #fff); /* For pre-releases of IE 10*/
  background-image:      -o-linear-gradient(top, pink, #fff); /* For old Opera (11.1 to 12.0) */
  background-image:         linear-gradient(to bottom, pink, #fff); /* Standard syntax; must be last */
  -webkit-background-clip: text;
  background-clip: text;
`;

export default SubHeaderSubTitle;
