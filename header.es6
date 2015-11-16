/* eslint react/no-multi-comp: 0, one-var: 0 */
import React, { Component, PropTypes } from 'react';

import { defaultGenerateClassNameList } from '@economist/component-variantify';
import { getSrcSet } from '@economist/component-articletemplate/utils';
import { isImage } from '@economist/component-articletemplate/proptypes';

import { ArticleHeaderContainer, ImageContainer } from '@economist/component-articletemplate/header';

const extendedHeaderItemClasses = [
  'gutter-l',
  'col-10',
];
export class WinHeader extends Component {

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

    let flytitleEl, titleEl, rubricEl, mainImageEl;
    if (flytitle) {
      flytitleEl = (
        <h1
          itemProp="headline"
          className={[
            ...generateClassNameList('ArticleTemplate--flytitle'),
            ...extendedHeaderItemClasses
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
            ...extendedHeaderItemClasses
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
            ...extendedHeaderItemClasses
          ].join(' ')}
        >
          {rubric}
        </h3>
      );
    }
    if (mainImage) {
      mainImageEl = (
        <img
          className={generateClassNameList('ArticleTemplate--image').join(' ')}
          src={`${mainImage.src}`}
          alt={mainImage.alt}
          itemProp="image"
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

    let flytitleEl, titleEl, rubricEl, mainImageEl;
    if (flytitle) {
      flytitleEl = (
        <h1
          itemProp="headline"
          className={[
            ...generateClassNameList('ArticleTemplate--flytitle'),
            ...extendedHeaderItemClasses
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
            ...extendedHeaderItemClasses
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
            ...extendedHeaderItemClasses
          ].join(' ')}
        >
          {rubric}
        </h3>
      );
    }
    if (mainImage) {
      mainImageEl = (
        <ImageContainer generateClassNameList={generateClassNameList}>
          <img
            className={generateClassNameList('ArticleTemplate--image').join(' ')}
            src={`${mainImage.src['1.0x']}`}
            srcSet={getSrcSet(mainImage.src)}
            alt={mainImage.alt}
            itemProp="image"
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
