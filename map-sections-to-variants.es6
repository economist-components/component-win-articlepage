import mapProps from 'map-props';

export default (sectionNameToVariantName) => mapProps({
  'variantName': ({ sectionName }) => sectionNameToVariantName[sectionName]
});
