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
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, byline, bylineLocation } = this.props;
    return (
      <ArticleFooterContainer generateClassNameList={generateClassNameList}>
        <BylineFooterContainer generateClassNameList={generateClassNameList}>
          <h3
            itemProp="byline"
            className={[
              ...generateClassNameList(`ArticleTemplate--byline`),
              ...extendedFooterBylineClasses,
            ].join(' ')}
          >
            {byline}
          </h3>
          <span
            itemProp="bylinedetails"
            className={[
              ...generateClassNameList(`ArticleTemplate--byline-details`),
              ...extendedFooterBylineDetailsClasses,
            ].join(' ')}
          >
            {bylineLocation}
          </span>
        </BylineFooterContainer>
      </ArticleFooterContainer>
    );
  }
}
