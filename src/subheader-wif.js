import ArticleSubheaderContainer from '@economist/component-articletemplate/lib/subheader';
import React from 'react';
import { defaultGenerateClassNameList } from '@economist/component-variantify';

const extendedSubheaderItemClasses = [
  'margin-l-1',
  'gutter-l',
];
export default function WifSubheader({
  generateClassNameList = defaultGenerateClassNameList,
  rubric,
  publishDate,
}) {
  return (
    <ArticleSubheaderContainer generateClassNameList={generateClassNameList}>
      <time
        itemProp="publishDate"
        dateTime={publishDate.raw}
        className={[
          ...generateClassNameList('article-template__pubdate'),
          ...extendedSubheaderItemClasses,
        ].join(' ')}
      >
        {publishDate.formatted}
      </time>
      <div
        itemProp="rubric"
        className={[
          ...generateClassNameList('article-template__rubric'),
          ...extendedSubheaderItemClasses,
        ].join(' ')}
      >
        {rubric}
      </div>
    </ArticleSubheaderContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  WifSubheader.propTypes = {
    generateClassNameList: React.PropTypes.func,
    rubric: React.PropTypes.string,
    publishDate: React.PropTypes.shape({
      raw: React.PropTypes.string,
      formatted: React.PropTypes.string,
    }),
  };
}
