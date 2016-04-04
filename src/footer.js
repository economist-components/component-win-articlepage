import ArticleFooterContainer from '@economist/component-articletemplate/lib/footer';
import CallToAction from './cta';
import React from 'react';
import { defaultGenerateClassNameList } from '@economist/component-variantify';

const extendedFooterBylineClasses = [
  'margin-l-1',
  'gutter-l',
  'col-10',
];
const extendedFooterBylineDetailsClasses = [
  'gutter-l',
  'col-10',
];
export function BylineFooterContainer({ generateClassNameList = defaultGenerateClassNameList, children }) {
  return (
    <div className={[
      ...generateClassNameList('article-template__byline-footer'),
      ...extendedFooterBylineClasses,
    ].join(' ')}
    >
      {children}
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  BylineFooterContainer.propTypes = {
    generateClassNameList: React.PropTypes.func,
    children: React.PropTypes.node,
  };
}

export default function WinFooter({
  generateClassNameList = defaultGenerateClassNameList,
  byline,
  bylineLocation,
  bio,
}) {
  function createMarkup(content) {
    return { __html: content }; //eslint-disable-line
  }

  function element({
    content = null,
    className = '',
    extededClasses,
    useDanger = false,
  }) {
    let html = null;
    if (content) {
      if (useDanger) {
        html = (
          <span
            className={[
              ...generateClassNameList(className),
              ...extededClasses,
            ].join(' ')}
            dangerouslySetInnerHTML={createMarkup(content)} //eslint-disable-line
          />
        );
      } else {
        html = (
          <span
            className={[
              ...generateClassNameList(className),
              ...extededClasses,
            ].join(' ')}
          >
            {content}
          </span>
        );
      }
    }

    return html;
  }

  return (
    <div>
      <ArticleFooterContainer generateClassNameList={generateClassNameList}>
        <BylineFooterContainer generateClassNameList={generateClassNameList}>
          {element({
            content: byline,
            className: 'article-template__byline',
            extendedClasses: extendedFooterBylineClasses,
          })}
          {element({
            content: bylineLocation,
            className: 'article-template__byline-location',
            extendedClasses: extendedFooterBylineDetailsClasses,
          })}
          {element({
            content: bio,
            className: 'article-template__bio',
            useDanger: true,
          })}
        </BylineFooterContainer>
      </ArticleFooterContainer>
      <CallToAction {...this.props} />
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  WinFooter.propTypes = {
    generateClassNameList: React.PropTypes.func,
    byline: React.PropTypes.string,
    bylineLocation: React.PropTypes.string,
    bio: React.PropTypes.string,
  };
}
