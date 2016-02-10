/* eslint react/no-multi-comp: 0 */
import React, { Component, PropTypes } from 'react';
import { ArticleFooterContainer } from '@economist/component-articletemplate/footer';
import { defaultGenerateClassNameList } from '@economist/component-variantify';
import CallToAction from './cta';

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

  render() {
    const { generateClassNameList, byline, bylineLocation, bio } = this.props;
    function createMarkup(content) {
      return { __html: content }; //eslint-disable-line
    }

    function element({
      content = null,
      klass = '',
      extededClasses,
      useDanger = false,
    }) {
      let html = null;
      if (content) {
        if (useDanger) {
          html = (
            <span
              className={[
                ...generateClassNameList(klass),
                ...extededClasses,
              ].join(' ')}
              dangerouslySetInnerHTML={createMarkup(content)} //eslint-disable-line
            />
          );
        } else {
          html = (
            <span
              className={[
                ...generateClassNameList(klass),
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
              klass: 'ArticleTemplate--byline',
              extendedClasses: extendedFooterBylineClasses,
            })}
            {element({
              content: bylineLocation,
              klass: 'ArticleTemplate--byline-location',
              extendedClasses: extendedFooterBylineDetailsClasses,
            })}
            {element({
              content: bio,
              klass: 'ArticleTemplate--byline-bio',
              useDanger: true,
            })}
          </BylineFooterContainer>
        </ArticleFooterContainer>
        <CallToAction {...this.props} />
      </div>
    );
  }

}
