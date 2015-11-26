/* eslint object-shorthand: 0 */
import ArticleTemplate from '@economist/component-articletemplate';
import createVariantSwitcher from '@economist/component-variantify';

import { WinHeader, WinPredictorsHeader } from './header';
import { WinSubheader, WinLeaderSubheader } from './subheader';
import {
  StandardArticleBody as StandardWinArticleBody,
  WorldInNumbersArticleBody as WorldInNumbersWinArticleBody,
} from './body';
import { WinFooter } from './footer';

const config = {
  defaultVariant: 'world-in-main',
  variants: {
    'world-in-main': {
      ArticleHeader: WinHeader,
      ArticleSubheader: WinSubheader,
      ArticleBody: StandardWinArticleBody,
      ArticleFooter: WinFooter,
    },
    'world-in-portrait': {
      ArticleHeader: WinHeader,
      ArticleSubheader: WinSubheader,
      ArticleBody: StandardWinArticleBody,
      ArticleFooter: WinFooter,
    },
    'world-in-leader': {
      ArticleHeader: WinHeader,
      ArticleSubheader: WinLeaderSubheader,
      ArticleBody: StandardWinArticleBody,
      ArticleFooter: WinFooter,
    },
    'world-in-predictors': {
      ArticleHeader: WinPredictorsHeader,
      ArticleSubheader: WinSubheader,
      ArticleBody: StandardWinArticleBody,
      ArticleFooter: WinFooter,
    },
    'world-in-numbers': {
      ArticleHeader: WinHeader,
      ArticleSubheader: WinSubheader,
      ArticleBody: WorldInNumbersWinArticleBody,
      ArticleFooter: WinFooter,
    },
  },
};
export default createVariantSwitcher(config)(ArticleTemplate);
