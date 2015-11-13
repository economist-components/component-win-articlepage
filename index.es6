import { PropTypes } from 'react';

import mapProps from 'map-props';
import { injectComponent } from './prop-transforms';

import VariantArticle from './variant-article';

const advertAfterParagraphLine = 5;
const advertDefinition = {
  'component': 'AdvertisementPanel',
  'props': {
    'adTag': '/5605/theworldin',
    'sizes': [ [ 970, 250 ], [ 1024, 768 ], [ 1, 1 ], [ 300, 250 ], [ 728, 90 ] ],
  },
};

const WorldInArticle = mapProps({
  'content': injectComponent(advertAfterParagraphLine, advertDefinition, 'advert'),
})(VariantArticle);
WorldInArticle.propTypes = {
  sectionName: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.object ])),
  advert: PropTypes.shape({
    adTag: PropTypes.string,
    reserveHeight: PropTypes.number,
  }),
};

export default WorldInArticle;
