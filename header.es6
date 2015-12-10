/* eslint react/no-multi-comp: 0, one-var: 0 */
import React, { Component, PropTypes } from 'react';

import { defaultGenerateClassNameList } from '@economist/component-variantify';
import { isImage } from '@economist/component-articletemplate/proptypes';
import Picture from '@economist/component-picture';

import { ArticleHeaderContainer, ImageContainer } from '@economist/component-articletemplate/header';

const extendedHeaderItemClasses = [
  'gutter-l',
];
export class WinHeader extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      mainImage: PropTypes.shape(Picture.propTypes || {}),
      flytitle: PropTypes.string,
      title: PropTypes.string,
      rubric: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, mainImage, flytitle, title, rubric } = this.props;

    let flytitleEl = null, titleEl = null, rubricEl = null, mainImageEl = null;
    if (flytitle) {
      flytitleEl = (
        <h1
          itemProp="headline"
          className={[
            ...generateClassNameList('ArticleTemplate--flytitle'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          {flytitle}
        </h1>
      );
    }
    if (title) {
      titleEl = (
        <h1
          itemProp="alternativeHeadline"
          className={[
            ...generateClassNameList('ArticleTemplate--title'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          {title}
        </h1>
      );
    }
    if (rubric) {
      rubricEl = (
        <h3
          itemProp="rubric"
          className={[
            ...generateClassNameList('ArticleTemplate--rubric'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          {rubric}
        </h3>
      );
    }
    if (mainImage) {
      mainImageEl = (
        <Picture
          className={generateClassNameList('ArticleTemplate--image').join(' ')}
          itemProp="image"
          {...mainImage}
        />
      );
    }

    return (
      <ImageContainer generateClassNameList={generateClassNameList}>
        {mainImageEl}

        <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
          {flytitleEl}
          {titleEl}
          {rubricEl}
        </ArticleHeaderContainer>
      </ImageContainer>
    );
  }
}

export class WinPredictorsHeader extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      mainImage: isImage,
      flytitle: PropTypes.string,
      title: PropTypes.string,
      rubric: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, mainImage, flytitle, title, rubric } = this.props;

    let flytitleEl = null, titleEl = null, rubricEl = null, mainImageEl = null;
    if (flytitle) {
      flytitleEl = (
        <h1
          itemProp="headline"
          className={[
            ...generateClassNameList('ArticleTemplate--flytitle'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          {flytitle}
        </h1>
      );
    }
    if (title) {
      titleEl = (
        <h1
          itemProp="alternativeHeadline"
          className={[
            ...generateClassNameList('ArticleTemplate--title'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          {title}
        </h1>
      );
    }
    if (rubric) {
      rubricEl = (
        <h3
          itemProp="rubric"
          className={[
            ...generateClassNameList('ArticleTemplate--rubric'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          {rubric}
        </h3>
      );
    }
    if (mainImage) {
      mainImageEl = (
        <ImageContainer generateClassNameList={generateClassNameList}>
          <Picture
            className={generateClassNameList('ArticleTemplate--image').join(' ')}
            itemProp="image"
            {...mainImage}
          />
        </ImageContainer>
      );
    }

    return (
      <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
        {flytitleEl}
        {titleEl}
        {rubricEl}
        {mainImageEl}
      </ArticleHeaderContainer>
    );
  }
}
