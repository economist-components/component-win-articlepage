import React from 'react';
import WorldInArticle from './variant-article';
import mapSectionsToVariants from './map-sections-to-variants';

export default mapSectionsToVariants({
  'Section A': 'variant-a',
  'Section B': 'variant-b',
  'Section C': 'variant-c',
})(WorldInArticle);
