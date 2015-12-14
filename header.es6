/* eslint react/no-multi-comp: 0, one-var: 0 */
/* global window */
import React, { Component, PropTypes } from 'react';
import codify from 'slugger';
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

export class WinNumbersHeader extends Component {
  static propTypes = {
    generateClassNameList: PropTypes.func,
    content: PropTypes.array,
    title: PropTypes.string,
  }

  static defaultProps = {
    generateClassNameList: defaultGenerateClassNameList,
  }

  constructor() {
    super(...arguments);
    this.generateCountries = this.generateCountries.bind(this);
    this.generateCountryElement = this.generateCountryElement.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: 'select',
    };
  }

  handleChange(event) {
    const target = event.target.value;
    const globalObject = global || (typeof window !== 'undefined' ? window : {});
    this.setState({ selectValue: target });
    globalObject.location = target;
  }

  generateCountries() {
    const { content } = this.props;
    const countries = [];
    content.map((item) => {
      if (item.component && item.component === 'Country') {
        countries.push({
          name: item.props.title,
          slug: codify(item.props.title, { decode: false }),
        });
      }
    });
    return countries;
  }

  generateCountryItem(country, index) {
    return (
      <option value={`#${country.slug}`} key={`country-item-${index}`} className="countries__option">
        {country.name}
      </option>
    );
  }

  generateCountryElement() {
    const countries = this.generateCountries();
    return (
      <select className="countries__select" value={this.state.selectValue} onChange={this.handleChange}>
        <option value="select">Select a country...</option>
        {countries.map((country, index) => {
          return this.generateCountryItem(country, index);
        })}
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
            ...generateClassNameList('ArticleTemplate--title'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          <span
            className={[
              ...generateClassNameList('ArticleTemplate--title-uppercase'),
              ...extendedHeaderItemClasses,
            ].join(' ')}
          >World In Numbers</span> Countries
        </h1>
        <div
          className={[
            ...generateClassNameList('ArticleTemplate--title-strap'),
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
