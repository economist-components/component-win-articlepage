import ArticleHeaderContainer from '@economist/component-articletemplate/lib/header';
import React from 'react';
import codify from 'slugger';
import { defaultGenerateClassNameList } from '@economist/component-variantify';

const extendedHeaderItemClasses = [
  'gutter-l',
];
export default class WinNumbersHeader extends React.Component {
  constructor(rest) {
    super(...rest);
    this.generateCountries = this.generateCountries.bind(this);
    this.generateCountryElement = this.generateCountryElement.bind(this);
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

  generateCountries() {
    let { content } = this.props;
    const countries = [];
    content = content || [];
    content.forEach((country) => {
      if (country.component && country.component === 'Country') {
        countries.push({
          name: country.props.title,
          slug: codify(country.props.title, { decode: false }),
        });
      }
    });
    return countries;
  }

  generateCountryItem(country, index) {
    return (
      <option value={`#${ country.slug }`} key={`country-item-${ index }`} className="countries__option">
        {country.name}
      </option>
    );
  }

  generateCountryElement() {
    const countries = this.generateCountries();
    return (
      <select className="countries__select" value={this.state.selectValue} onChange={this.handleChange}>
        <option value="select">Select a country...</option>
        {countries.map((country, index) => (this.generateCountryItem(country, index)))}
      </select>
    );
  }

  render() {
    const { generateClassNameList, title } = this.props;
    const countryElementList = this.generateCountryElement();
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
          >World In Numbers</span> Countries
        </h1>
        <div
          className={[
            ...generateClassNameList('article-template__title-strap'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          Our 2016 forecasts for {title}.
        </div>

        {countryElementList}
      </div>
    );
    return (
      <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
        {titleEl}
      </ArticleHeaderContainer>
    );
  }
}

WinNumbersHeader.defaultProps = {
  generateClassNameList: defaultGenerateClassNameList,
};

if (process.env.NODE_ENV !== 'production') {
  WinNumbersHeader.propTypes = {
    generateClassNameList: React.PropTypes.func,
    content: React.PropTypes.arrayOf(
      React.PropTypes.object,
    ),
    title: React.PropTypes.string,
  };
}
