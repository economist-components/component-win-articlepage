import ArticleHeaderContainer, { ImageContainer } from '@economist/component-articletemplate/lib/header';
import Picture from '@economist/component-picture';
import React from 'react';
import { defaultGenerateClassNameList } from '@economist/component-variantify';

const extendedHeaderItemClasses = [
  'gutter-l',
];
export default function WifHeader({
  generateClassNameList = defaultGenerateClassNameList,
  mainImage,
  flytitle,
  title,
  sectionName,
}) {
  let flytitleEl = null;
  let titleEl = null;
  let mainImageEl = null;
  let sectionNameEl = null;
  if (sectionName) {
    sectionNameEl = (
      <div
        itemProp="section"
        className={[
          ...generateClassNameList('article-template__section-name'),
          ...extendedHeaderItemClasses,
        ].join(' ')}
      >
        {sectionName}
      </div>
    );
  }

  if (flytitle) {
    flytitleEl = (
      <div
        itemProp="headline"
        aria-hidden="true"
        className={[
          ...generateClassNameList('article-template__flytitle'),
          ...extendedHeaderItemClasses,
        ].join(' ')}
      >
        {flytitle}
      </div>
    );
  }

  if (title) {
    titleEl = (
      <h1
        itemProp="alternativeHeadline"
        aria-label={`${ flytitle } ${ title }`}
        className={[
          ...generateClassNameList('article-template__title'),
          ...extendedHeaderItemClasses,
        ].join(' ')}
      >
        {title}
      </h1>
    );
  }

  if (mainImage) {
    mainImageEl = (
      <Picture
        className={generateClassNameList('article-template__image').join(' ')}
        itemProp="image"
        {...mainImage}
      />
    );
  }

  return (
    <ImageContainer generateClassNameList={generateClassNameList}>
      {mainImageEl}
      <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
        {sectionNameEl}
        {flytitleEl}
        {titleEl}
      </ArticleHeaderContainer>
    </ImageContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  WifHeader.propTypes = {
    generateClassNameList: React.PropTypes.func,
    mainImage: React.PropTypes.shape(Picture.propTypes || {}),
    sectionName: React.PropTypes.string,
    flytitle: React.PropTypes.string,
    title: React.PropTypes.string,
  };
}
