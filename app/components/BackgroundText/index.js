import React from 'react';
import PropTypes from 'prop-types';

import SVGQuoteLeft from 'components/SVGQuoteLeft';
import SVGQuoteRight from 'components/SVGQuoteRight';

import Word from './Word';
import Wrapper from './Wrapper';
import RomanizedWord from './RomanizedWord';
import Translation from './Translation';

const BackgroundText = (props) => (
  <Wrapper {...props}>
    <Word className="jp">
      向上心
    </Word>
    <a href="http://www.presentationzen.com/presentationzen/2015/05/the-five-secrets-to-mastery.html" target="_blank">
      <RomanizedWord>
        Kōjōshin
      </RomanizedWord>
    </a>
    <Translation>
      always aspire to improve<wbr /> oneself and one&apos;s work.
      <SVGQuoteLeft />
      <SVGQuoteRight />
    </Translation>
  </Wrapper>
);


BackgroundText.propTypes = {
  children: PropTypes.any,
};

export default BackgroundText;
