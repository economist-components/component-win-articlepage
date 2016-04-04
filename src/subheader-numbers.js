import ArticleSubheaderContainer from '@economist/component-articletemplate/lib/subheader';
import React from 'react';
import { defaultGenerateClassNameList } from '@economist/component-variantify';

const extendedSubheaderItemClasses = [
  'margin-l-1',
  'gutter-l',
];
export default function WinNumbersSubheader({
    generateClassNameList = defaultGenerateClassNameList,
    title,
}) {
  return (
    <ArticleSubheaderContainer generateClassNameList={generateClassNameList}>
      <div
        itemProp="section"
        className={[
          ...generateClassNameList('article-template__section-name-wrapper'),
          ...extendedSubheaderItemClasses,
        ].join(' ')}
      >
        <h2
          itemProp="section"
          className={[
            ...generateClassNameList('article-template__section-name'),
            ...extendedSubheaderItemClasses,
          ].join(' ')}
        >
          {title}
        </h2>
      </div>
    </ArticleSubheaderContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  WinNumbersSubheader.propTypes = {
    generateClassNameList: React.PropTypes.func,
    title: React.PropTypes.string,
  };
}
