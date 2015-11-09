import React from 'react';
import WorldInArticle from './variant-article';

import mapProps from 'map-props';
import { sectionToVariant, injectComponent } from './prop-transforms';

const sectionNameToVariantNameMap = {
  'Politics': 'world-in-main',
  'Leaders': 'world-in-leader',
  'Portraits': 'world-in-portrait',
  'Predictors': 'world-in-predictors',
};
const defaultVariantName = 'world-in-main';

const advertAfterParagraphLine = 5;
const advertDefinition = {
  "component": "AdvertisementPanel",
  "props": {
    "adTag": "/5605/teg.fmsq/wdif/tech"
  },
};

export default mapProps({
 'variantName': sectionToVariant(sectionNameToVariantNameMap, defaultVariantName),
 'content': injectComponent(advertAfterParagraphLine, advertDefinition)
})(WorldInArticle);
