import React from 'react';
import VariantArticle from './variant-article';

export default function WorldInArticle(rest) {
  return (
    <VariantArticle
      {...rest}
    />
  );
}

WorldInArticle.defaultProps = {
  scrollToOffset: 100,
};

if (process.env.NODE_ENV !== 'production') {
  WorldInArticle.propTypes = {
    sectionName: React.PropTypes.string,
    content: React.PropTypes.arrayOf(React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.object ])),
    advert: React.PropTypes.shape({
      adTag: React.PropTypes.string,
      reserveHeight: React.PropTypes.number,
    }),
    scrollToOffset: React.PropTypes.number,
  };
}
