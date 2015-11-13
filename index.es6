import { PropTypes } from 'react';

import mapProps from 'map-props';
import { injectComponent } from './prop-transforms';

import VariantArticle from './variant-article';

const advertAfterParagraphLine = 5;
const advertDefinition = {
  'component': 'AdvertisementPanel',
  'props': {
    'adTag': '/5605/teg.fmsq/wdif/tech',
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
