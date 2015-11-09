import mapProps from 'map-props';
import { sectionToVariant, injectComponent } from './prop-transforms';

import WorldInArticle from './variant-article';

const sectionNameToVariantNameMap = {
  'Politics': 'world-in-main',
  'Leaders': 'world-in-leader',
  'Portraits': 'world-in-portrait',
  'Predictors': 'world-in-predictors',
};
const defaultVariantName = 'world-in-main';

const advertAfterParagraphLine = 5;
const advertDefinition = {
  'component': 'AdvertisementPanel',
  'props': {
    'adTag': '/5605/teg.fmsq/wdif/tech',
  },
};
export default mapProps({
  'variantName': sectionToVariant(sectionNameToVariantNameMap, defaultVariantName),
  'content': injectComponent(advertAfterParagraphLine, advertDefinition, 'advert'),
})(WorldInArticle);
