/* eslint object-shorthand: 0 */
import ArticleTemplate from '@economist/component-articletemplate';
import createVariantSwitcher from '@economist/component-variantify';

import ArticleBody from '@economist/component-articletemplate/body';
import { WinHeader, WinPredictorsHeader } from './header';
import { WinSubheader, WinLeaderSubheader } from './subheader';
import { WinFooter } from './footer';

const config = {
  defaultVariant: 'world-in-main',
  variants: {
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
  },
};

export default createVariantSwitcher(config)(ArticleTemplate);
