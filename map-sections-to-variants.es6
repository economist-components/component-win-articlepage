import mapProps from 'map-props';

export default (sectionNameToVariantName, defaultVariant) => mapProps({
  'variantName': ({ sectionName }) => sectionNameToVariantName[sectionName] || defaultVariant,
});
