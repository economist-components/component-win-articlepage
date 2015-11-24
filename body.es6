import ArticleBodyTemplate from '@economist/component-articletemplate/body';
import AdvertisementPanel from '@economist/component-ad-panel';
import ImageCaption from '@economist/component-imagecaption';
import Video from '@economist/component-video';
import { createVariant } from '@economist/component-variantify';

export default createVariant({
  AdvertisementPanel,
  ImageCaption,
  Video,
})(ArticleBodyTemplate);
