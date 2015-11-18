/* eslint object-shorthand: 0 */
import ArticleTemplate from '@economist/component-articletemplate';
import createVariantSwitcher from '@economist/component-variantify';

import { WinHeader, WinPredictorsHeader } from './header';
import { WinSubheader, WinLeaderSubheader } from './subheader';
import WinArticleBody from './body';
import { WinFooter } from './footer';

const config = {
  defaultVariant: 'world-in-main',
  variants: {
    'world-in-main': {
      ArticleHeader: WinHeader,
      ArticleSubheader: WinSubheader,
      ArticleBody: WinArticleBody,
      ArticleFooter: WinFooter,
    },
    'world-in-portrait': {
      ArticleHeader: WinHeader,
      ArticleSubheader: WinSubheader,
      ArticleBody: WinArticleBody,
      ArticleFooter: WinFooter,
    },
    'world-in-leader': {
      ArticleHeader: WinHeader,
      ArticleSubheader: WinLeaderSubheader,
      ArticleBody: WinArticleBody,
      ArticleFooter: WinFooter,
    },
    'world-in-predictors': {
      ArticleHeader: WinHeader,
      ArticleSubheader: WinSubheader,
      ArticleBody: WinArticleBody,
      ArticleFooter: WinFooter,
    },
  },
};

export default createVariantSwitcher(config)(ArticleTemplate);
