import React, { Component, PropTypes } from 'react';

import { ArticleFooterContainer } from '@economist/component-articletemplate/footer';
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
function BylineFooterContainer({ generateClassNameList = defaultGenerateClassNameList, children }) {
  return (
    <div className={[
      ...generateClassNameList(`ArticleTemplate--byline-footer`),
      ...extendedFooterBylineClasses,
    ].join(' ')}
    >
      {children}
    </div>
  );
}
BylineFooterContainer.propTypes = {
  generateClassNameList: PropTypes.func,
  children: PropTypes.node,
};

export class WinFooter extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      byline: PropTypes.string,
      bylineLocation: PropTypes.string,
      bio: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }
  /* eslint-disable react/no-danger */
  render() {
    const { generateClassNameList, byline, bylineLocation, bio } = this.props;
    return (
      <ArticleFooterContainer generateClassNameList={generateClassNameList}>
        <BylineFooterContainer generateClassNameList={generateClassNameList}>
          <h3
            className={[
              ...generateClassNameList(`ArticleTemplate--byline`),
              ...extendedFooterBylineClasses,
            ].join(' ')}
          >
            {byline}
          </h3>
          <span
            className={[
              ...generateClassNameList(`ArticleTemplate--byline-location`),
              ...extendedFooterBylineDetailsClasses,
            ].join(' ')}
          >
            {bylineLocation}
          </span>

          <span
            className={[
              ...generateClassNameList(`ArticleTemplate--byline-bio`),
              ...extendedFooterBylineDetailsClasses,
            ].join(' ')}
            dangerouslySetInnerHTML={{
              '__html': bio,
            }}
          />
        </BylineFooterContainer>
      </ArticleFooterContainer>
    );
  }
  /* eslint-enable react/no-danger */
}
