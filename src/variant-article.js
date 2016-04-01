<<<<<<< HEAD:src/variant-article.js
=======
/* eslint object-shorthand: 0 */
import ArticleTemplate from '@economist/component-articletemplate';
import createVariantSwitcher from '@economist/component-variantify';

import { WinHeader, WifHeader, WinPredictorsHeader, WinNumbersHeader, WinIndustriesHeader } from './header';
import { WifSubheader, WinSubheader, WinLeaderSubheader, WinNumbersSubheader } from './subheader';
>>>>>>> feat: added css for world if:variant-article.es6
import {
  StandardArticleBody as StandardWinArticleBody,
  WorldInNumbersArticleBody as WorldInNumbersWinArticleBody,
  WorldIfArticleBody,
} from './body';
import ArticleTemplate from '@economist/component-articletemplate';
import CallToAction from './cta';
import WifHeader from './header-wif';
import WifSubheader from './subheader-wif';
import WinFooter from './footer';
import WinHeader from './header-win';
import WinIndustriesHeader from './header-industries';
import WinLeaderSubheader from './subheader-leader';
import WinNumbersHeader from './header-numbers';
import WinNumbersSubheader from './subheader-numbers';
import WinPredictorsHeader from './header-predictors';
import WinSubheader from './subheader-win';
import createVariantSwitcher from '@economist/component-variantify';

const config = {
  defaultVariant: 'world-in-main',
  variants: {
    'world-if': {
      ArticleHeader: WifHeader,
      ArticleSubheader: WifSubheader,
      ArticleBody: WorldIfArticleBody,
      ArticleFooter: WinFooter,
    },
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
      ArticleHeader: WinNumbersHeader,
      ArticleSubheader: WinNumbersSubheader,
      ArticleBody: WorldInNumbersWinArticleBody,
      ArticleFooter: CallToAction,
    },
    'world-in-industries': {
      ArticleHeader: WinIndustriesHeader,
      ArticleBody: WorldInNumbersWinArticleBody,
      ArticleFooter: CallToAction,
    },
  },
};
export default createVariantSwitcher(config)(ArticleTemplate);
