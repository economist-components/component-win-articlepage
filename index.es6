import React from 'react';
import WorldInArticle from './variant-article';
import mapSectionsToVariants from './map-sections-to-variants';

export default mapSectionsToVariants({
  'Politics': 'world-in-main',
  'Leaders': 'world-in-leader',
  'Portraits': 'world-in-portrait',
  'Predictors': 'world-in-predictors',
}, 'world-in-main')(WorldInArticle);
