/* eslint react/no-multi-comp: 0 */
import React, { Component, PropTypes } from 'react';

import { ArticleSubheaderContainer } from '@economist/component-articletemplate/subheader';
import { defaultGenerateClassNameList } from '@economist/component-variantify';

const extendedSubheaderItemClasses = [
  'margin-l-1',
  'gutter-l',
  'col-10',
];
export class WinSubheader extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      sectionName: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, sectionName } = this.props;
    return (
      <ArticleSubheaderContainer generateClassNameList={generateClassNameList}>
        <h2
          itemProp="byline"
          className={[
            ...generateClassNameList('ArticleTemplate--byline'),
            ...extendedSubheaderItemClasses
          ].join(' ')}
        >
          TODO: Put byline in the data
        </h2>
        <h2
          itemProp="publishdate"
          className={[
            ...generateClassNameList('ArticleTemplate--pubdate'),
            ...extendedSubheaderItemClasses
          ].join(' ')}
        >
          TODO: Put publish date in the data
        </h2>
        <h2
          itemProp="section"
          className={[
            ...generateClassNameList('ArticleTemplate--section-section'),
            ...extendedSubheaderItemClasses
          ].join(' ')}
        >
          {sectionName}
        </h2>
      </ArticleSubheaderContainer>
    );
  }
}

export class WinLeaderSubheader extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      sectionName: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, sectionName } = this.props;
    return (
      <ArticleSubheaderContainer generateClassNameList={generateClassNameList}>
        <h2
          itemProp="publishdate"
          className={[
            ...generateClassNameList('ArticleTemplate--pubdate'),
            ...extendedSubheaderItemClasses
          ].join(' ')}
        >
          TODO: Put publish date in the data
        </h2>
        <h2
          itemProp="section"
          className={[
            ...generateClassNameList('ArticleTemplate--section-section'),
            ...extendedSubheaderItemClasses
          ].join(' ')}
        >
          {sectionName}
        </h2>
      </ArticleSubheaderContainer>
    );
  }
}
