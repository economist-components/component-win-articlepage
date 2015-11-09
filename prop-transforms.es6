export const sectionToVariant = (sectionNameToVariantName, defaultVariant) => ({ sectionName }) => {
  return sectionNameToVariantName[sectionName] || defaultVariant;
};

const getNthParagraphIndex = (paragraphLine, content) => {
  let lastParagraphIndex = 0;
  let currentIndex = 0, nParagraph = paragraphLine;
  while (nParagraph-- && currentIndex++ < content.length) {
    if (typeof content[currentIndex] === 'string') {
      lastParagraphIndex = currentIndex;
    }
  }

  return lastParagraphIndex;
};
export const injectComponent = (paragraphLine = 5, componentDefinition) => ({ content = [] }) => {
  const nthParagraphIndex = getNthParagraphIndex(paragraphLine, content);
  const componentPlacementIndex = nthParagraphIndex + 1 < content.length ?
                                  nthParagraphIndex + 1 :
                                  nthParagraphIndex;
  content.splice(componentPlacementIndex, 0, componentDefinition)
  return content;
};
