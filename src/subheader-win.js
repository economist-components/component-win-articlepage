import ArticleSubheaderContainer from '@economist/component-articletemplate/lib/subheader';
import React from 'react';
import { defaultGenerateClassNameList } from '@economist/component-variantify';

const extendedSubheaderItemClasses = [
  'margin-l-1',
  'gutter-l',
];
export default function WinSubheader({
  generateClassNameList = defaultGenerateClassNameList,
  sectionName,
  byline,
  publishDate,
}) {
  return (
    <ArticleSubheaderContainer generateClassNameList={generateClassNameList}>
      <h2
        itemProp="byline"
        className={[
          ...generateClassNameList('article-template__byline'),
          ...extendedSubheaderItemClasses,
        ].join(' ')}
      >
        {byline}
      </h2>
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
      <h2
        itemProp="section"
        className={[
          ...generateClassNameList('article-template__section-name'),
          ...extendedSubheaderItemClasses,
        ].join(' ')}
      >
        {sectionName}
      </h2>
    </ArticleSubheaderContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  WinSubheader.propTypes = {
    generateClassNameList: React.PropTypes.func,
    sectionName: React.PropTypes.string,
    byline: React.PropTypes.string,
    publishDate: React.PropTypes.shape({
      raw: React.PropTypes.string,
      formatted: React.PropTypes.string,
    }),
  };
}
