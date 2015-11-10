import ArticleBodyTemplate from '@economist/component-articletemplate/body';
import AdvertisementPanel from '@economist/component-ad-panel';

import { createVariant } from '@economist/component-variantify';

export default createVariant({
  AdvertisementPanel: AdvertisementPanel,
})(ArticleBodyTemplate);
