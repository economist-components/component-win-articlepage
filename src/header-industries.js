import ArticleHeaderContainer from '@economist/component-articletemplate/lib/header';
import React from 'react';
import codify from 'slugger';
import { defaultGenerateClassNameList } from '@economist/component-variantify';

const extendedHeaderItemClasses = [
  'gutter-l',
];
export default class WinIndustriesHeader extends React.Component {
  constructor(rest) {
    super(...rest);
    this.generateIndustries = this.generateIndustries.bind(this);
    this.generateIndustryElement = this.generateIndustryElement.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.state = {
      value: 'select',
    };
  }

  scrollTo(target) {
    /* eslint-env browser */
    const element = document.querySelector(`a[name=${ target }]`);
    const buffer = 100;
    const top = Math.floor(element.getBoundingClientRect().top - buffer);
    window.scrollTo(0, top);
  }

  handleChange(event) {
    if (!event && !event.target) {
      return;
    }

    const target = event.target.value.replace('#', '');
    this.scrollTo(target);
    this.setState({ selectValue: target });
  }

  generateIndustries() {
    let { content } = this.props;
    const industries = [];
    content = content || [];
    content.forEach((industry) => {
      if (industry.component && industry.component === 'Industry') {
        industries.push({
          name: industry.props.title,
          slug: codify(industry.props.title, { decode: false }),
        });
      }
    });
    return industries;
  }

  generateIndustryItem(industry, index) {
    return (
      <option value={`#${ industry.slug }`} key={`industry-item-${ index }`} className="industry__option">
        {industry.name}
      </option>
    );
  }

  generateIndustryElement() {
    const industries = this.generateIndustries();
    return (
      <select className="industry__select" value={this.state.selectValue} onChange={this.handleChange}>
        <option value="select">Select an industry...</option>
        {industries.map((industry, index) => (this.generateIndustryItem(industry, index)))}
      </select>
    );
  }

  render() {
    const { generateClassNameList } = this.props;
    const industryElementList = this.generateIndustryElement();
    const titleEl = (
      <div>
        <h1
          itemProp="alternativeHeadline"
          className={[
            ...generateClassNameList('article-template__title'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          <span
            className={[
              ...generateClassNameList('article-template__title-uppercase'),
              ...extendedHeaderItemClasses,
            ].join(' ')}
          >World In Numbers</span> Industries
        </h1>
        <div
          className={[
            ...generateClassNameList('article-template__title-strap'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          Our 2016 forecasts for Industries.
        </div>

        {industryElementList}
      </div>
    );
    return (
      <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
        {titleEl}
      </ArticleHeaderContainer>
    );
  }
}

WinIndustriesHeader.defaultProps = {
  generateClassNameList: defaultGenerateClassNameList,
};

if (process.env.NODE_ENV !== 'production') {
  WinIndustriesHeader.propTypes = {
    generateClassNameList: React.PropTypes.func,
    content: React.PropTypes.arrayOf(
      React.PropTypes.object,
    ),
    title: React.PropTypes.string,
  };
}
