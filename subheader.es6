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
      byline: PropTypes.string,
      publishDate: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, sectionName, byline, publishDate } = this.props;
    const formattedPublishDate = new Date(publishDate).toDateString();
    return (
      <ArticleSubheaderContainer generateClassNameList={generateClassNameList}>
        <h2
          itemProp="byline"
          className={[
            ...generateClassNameList('ArticleTemplate--byline'),
            ...extendedSubheaderItemClasses,
          ].join(' ')}
        >
          {byline}
        </h2>
        <h2
          itemProp="publishDate"
          className={[
            ...generateClassNameList('ArticleTemplate--pubdate'),
            ...extendedSubheaderItemClasses,
          ].join(' ')}
        >
          {formattedPublishDate}
        </h2>
        <h2
          itemProp="section"
          className={[
            ...generateClassNameList('ArticleTemplate--section-section'),
            ...extendedSubheaderItemClasses,
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
      publishDate: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, sectionName, publishDate } = this.props;
    const formattedPublishDate = new Date(publishDate).toDateString();
    return (
      <ArticleSubheaderContainer generateClassNameList={generateClassNameList}>
        <h2
          itemProp="publishDate"
          className={[
            ...generateClassNameList('ArticleTemplate--pubdate'),
            ...extendedSubheaderItemClasses,
          ].join(' ')}
        >
          {formattedPublishDate}
        </h2>
        <h2
          itemProp="section"
          className={[
            ...generateClassNameList('ArticleTemplate--section-section'),
            ...extendedSubheaderItemClasses,
          ].join(' ')}
        >
          {sectionName}
        </h2>
      </ArticleSubheaderContainer>
    );
  }
}
