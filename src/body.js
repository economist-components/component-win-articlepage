import AdvertisementPanel from '@economist/component-ad-panel';
import ArticleBodyTemplate from '@economist/component-articletemplate/lib/body';
import { Country } from '@economist/component-win-stats-container';
import ImageCaption from '@economist/component-imagecaption';
import Industry from './industry';
import Video from '@economist/component-video';
import { createVariant } from '@economist/component-variantify';
const innerArticleBodyComponents = {
  AdvertisementPanel,
  ImageCaption,
  Video,
};

const StandardArticleBody = createVariant(
  innerArticleBodyComponents
)(ArticleBodyTemplate);
const WorldInNumbersArticleBody = createVariant({
  ...innerArticleBodyComponents,
  Country,
  Industry,
})(ArticleBodyTemplate);
export { StandardArticleBody, WorldInNumbersArticleBody };
