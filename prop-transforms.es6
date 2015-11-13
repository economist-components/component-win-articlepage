function getNthParagraphIndex(paragraphLine, content) {
  let lastParagraphIndex = 0;
  let currentIndex = 0;
  let nParagraph = paragraphLine;
  while (nParagraph-- && currentIndex++ < content.length) {
    if (typeof content[currentIndex] === 'string') {
      lastParagraphIndex = currentIndex;
    }
  }

  return lastParagraphIndex;
}

export function injectComponent(paragraphLine = 5, componentDefinition, defaultComponentPropsKey = 'advert') {
  return (props) => {
    const { content = [] } = props;
    componentDefinition.props = {
      ...componentDefinition.props,
      ...props[defaultComponentPropsKey],
    };

    const nthParagraphIndex = getNthParagraphIndex(paragraphLine, content);
    const componentPlacementIndex = nthParagraphIndex + 1 < content.length ?
                                    nthParagraphIndex + 1 :
                                    nthParagraphIndex;
    content.splice(componentPlacementIndex, 0, componentDefinition);
    return content;
  };
}
