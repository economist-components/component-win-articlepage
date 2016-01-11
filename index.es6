import React from 'react';
import VariantArticle from './variant-article';

export default function WorldInArticle(args) {
  return (
    <VariantArticle
      {...args}
    />
  );
}

if (process.env.NODE_ENV !== 'production') {
  WorldInArticle.propTypes = {
    sectionName: React.PropTypes.string,
    content: React.PropTypes.arrayOf(React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.object ])),
    advert: React.PropTypes.shape({
      adTag: React.PropTypes.string,
      reserveHeight: React.PropTypes.number,
    }),
  };
}
