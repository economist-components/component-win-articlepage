/* eslint object-shorthand: 0 */
import ArticleTemplate from '@economist/component-articletemplate';
import variantify from '@economist/component-variantify';

import ArticleBody from '@economist/component-articletemplate/body';
import { WinHeader, WinPredictorsHeader } from './header';
import { WinSubheader, WinLeaderSubheader } from './subheader';
import { WinFooter } from './footer';

const defaults = {
  defaultVariant: 'world-in-main',
  variants: [
    'world-in-main',
    'world-in-portrait',
    'world-in-leader',
    'world-in-predictors',
  ],
};

const variantInnerComponents = {
  'world-in-main': {
    ArticleHeader: WinHeader,
    ArticleSubheader: WinSubheader,
    ArticleBody: ArticleBody,
    ArticleFooter: WinFooter,
  },
  'world-in-portrait': {
    ArticleHeader: WinHeader,
    ArticleSubheader: WinSubheader,
    ArticleBody: ArticleBody,
    ArticleFooter: WinFooter,
  },
  'world-in-leader': {
    ArticleHeader: WinHeader,
    ArticleSubheader: WinLeaderSubheader,
    ArticleBody: ArticleBody,
    ArticleFooter: WinFooter,
  },
  'world-in-predictors': {
    ArticleHeader: WinPredictorsHeader,
    ArticleSubheader: WinSubheader,
    ArticleBody: ArticleBody,
    ArticleFooter: WinFooter,
  },
};

const vary = variantify(defaults, variantInnerComponents);
export default vary(ArticleTemplate);
