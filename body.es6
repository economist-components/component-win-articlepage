import ArticleBodyTemplate from '@economist/component-articletemplate/body';
import AdvertisementPanel from '@economist/component-ad-panel';
import ImageCaption from '@economist/component-imagecaption';

import { createVariant } from '@economist/component-variantify';

export default createVariant({
  AdvertisementPanel,
  ImageCaption,
})(ArticleBodyTemplate);
