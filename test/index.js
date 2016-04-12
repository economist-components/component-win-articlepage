import 'babel-polyfill';
import React from 'react';
import WinFooter from '../src/footer';
import WinHeader from '../src/header-win';
import WinIndustriesHeader from '../src/header-industries';
import WinNumbersHeader from '../src/header-numbers';
import WinSubheader from '../src/subheader-win';
import WorldInArticle from '../src';
import article from '../stubbed/article';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';

chai.use(chaiEnzyme()).should();

describe('WinFooter', () => {
  let props = null;
  beforeEach(() => {
    props = {
      byline: 'The byline',
      bylineLocation: 'The byline location',
      bio: 'The bio',
    };
  });

  it('renders a React element', () => {
    React.isValidElement(<WinFooter {...props} />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let winFooter = null;
    beforeEach(() => {
      rendered = mount(<WinFooter {...props} />);
      winFooter = rendered.find('.article-template__footer');
    });

    it('renders a top level <footer />', () => {
      winFooter.should.have.tagName('footer');
    });

    it('should contain the data passed in within its HTML structure', () => {
      winFooter.find('.article-template__byline').should.have.text(props.byline);
      winFooter.find('.article-template__byline-location').should.have.text(props.bylineLocation);
      winFooter.find('.article-template__bio').should.have.text(props.bio);
    });
  });
});

describe('WinHeader', () => {
  let props = null;
  beforeEach(() => {
    props = {
      mainImage: {
        'sources': [
          { 'url': 'https://placehold.it/1792x1008', 'width': 896, 'height': 504, 'dppx': 1 },
        ],
        alt: 'alt-ern-ate',
      },
      flytitle: 'Pretty fly',
      title: 'For a white guy',
      rubric: 'uno dos tres cuatro cinco cinco seis',
    };
  });

  it('renders a React element', () => {
    React.isValidElement(<WinHeader {...props} />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let winHeader = null;
    beforeEach(() => {
      rendered = mount(<WinHeader {...props} />);
      winHeader = rendered.find('.article-template__imagecontainer');
    });

    it('renders a <header />', () => {
      winHeader.find('.article-template__header').should.have.tagName('header');
    });

    it('should contain the data passed in within its HTML structure', () => {
      winHeader.find('.article-template__flytitle').should.have.text(props.flytitle);
      winHeader.find('.article-template__title').should.have.text(props.title);
      winHeader.find('.article-template__rubric').should.have.text(props.rubric);
      winHeader.find('.picture__image').should.have.attr('src', props.mainImage.sources[0].url);
    });
  });
});

describe('WinSubheader', () => {
  let props = null;
  beforeEach(() => {
    props = {
      byline: article.byline,
      publishDate: article.publishDate,
      sectionName: article.sectionName,
    };
  });

  it('renders a React element', () => {
    React.isValidElement(<WinSubheader {...props} />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let winSubheader = null;
    beforeEach(() => {
      rendered = mount(<WinSubheader {...props} />);
      winSubheader = rendered.find('.article-template__subheader');
    });

    it('renders a top level <header />', () => {
      winSubheader.find('.article-template__subheader').should.have.tagName('header');
    });

    it('should contain the data passed in within its HTML structure', () => {
      winSubheader.find('.article-template__byline').should.have.text(props.byline);
      winSubheader.find('.article-template__section-name').should.have.text(props.sectionName);
      winSubheader.find('.article-template__pubdate').should.have.text('Nov 2nd 2015, 14:00');
    });
  });
});

describe('WinNumbersHeader', () => {
  it('renders a React element', () => {
    React.isValidElement(<WinNumbersHeader />).should.equal(true);
  });

  describe('generateCountryItem', () => {
    it('renders an option item', () => {
      const winNumbersHeader = new WinNumbersHeader();
      winNumbersHeader.generateCountryItem({
        slug: 'sluggy',
        name: 'foobar',
      }, 0).should.deep.equal(
        <option value="#sluggy" key="country-item-0" className="countries__option">
          foobar
        </option>
      );
    });
  });

  describe('generateCountryElement', () => {
    it('renders a select item', () => {
      const winNumbersHeader = new WinNumbersHeader({
        content: [
          {
            component: 'Country',
            props: {
              title: 'Austria',
            },
          },
        ],
      });
      /* eslint-disable no-undefined */
      winNumbersHeader
        .generateCountryElement()
        .should.deep.equal(
          <select
            className="countries__select"
            value={undefined}
            onChange={winNumbersHeader.handleChange}
          >
            <option value="select">Select a country...</option>
            {[ <option value="#austria" key="country-item-0" className="countries__option">
              Austria
            </option> ]}
          </select>
        );
      /* eslint-enable no-undefined */
    });
  });
});

describe('WinIndustriesHeader', () => {
  it('renders a React element', () => {
    React.isValidElement(<WinNumbersHeader />).should.equal(true);
  });

  describe('generateIndustryItem', () => {
    it('renders an option item', () => {
      const winIndustryHeader = new WinIndustriesHeader();
      winIndustryHeader.generateIndustryItem({
        slug: 'sluggy',
        name: 'foobar',
      }, 0).should.deep.equal(
        <option value="#sluggy" key="industry-item-0" className="industry__option">
          foobar
        </option>
      );
    });
  });

  describe('generateIndustryElement', () => {
    it('renders a select item', () => {
      const winIndustryHeader = new WinIndustriesHeader({
        content: [
          {
            component: 'Industry',
            props: {
              title: 'Automotive',
            },
          },
        ],
      });
      /* eslint-disable no-undefined */
      winIndustryHeader
        .generateIndustryElement()
        .should.deep.equal(
          <select
            className="industry__select"
            value={undefined}
            onChange={winIndustryHeader.handleChange}
          >
            <option value="select">Select an industry...</option>
            {[ <option value="#automotive" key="industry-item-0" className="industry__option">
              Automotive
            </option> ]}
          </select>
        );
      /* eslint-enable no-undefined */
    });
  });
});

describe('WorldInArticle', () => {
  let props = null;
  beforeEach(() => {
    props = {
      id: article.id,
      slug: article.slug,
      byline: article.byline,
      bylineLocation: article.byline_location,
      bio: article.bio,
      publishDate: article.publishDate,
      title: article.title,
      flytitle: article.flytitle,
      rubric: article.rubric,
      mainImage: article.mainimage,
      content: article.content,
      sectionName: article.sectionName,
      variantName: article.variantName,
    };
  });

  it('renders a React element', () => {
    React.isValidElement(<WorldInArticle {...props} />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let winArticlepage = null;
    beforeEach(() => {
      rendered = mount(<WorldInArticle {...props} />);
      winArticlepage = rendered.find('.article-template');
    });

    it('renders a top level article.world-in-main-article-template', () => {
      winArticlepage.should.have.tagName('article');
      winArticlepage.should.have.className('world-in-main-article-template');
    });
  });
});

describe('variant-article', () => {
  let props = null;
  beforeEach(() => {
    props = {
      id: article.id,
      slug: article.slug,
      byline: article.byline,
      bylineLocation: article.byline_location,
      bio: article.bio,
      publishDate: article.publishDate,
      title: article.title,
      flytitle: article.flytitle,
      rubric: article.rubric,
      mainImage: article.mainimage,
      content: article.content,
      sectionName: 'Predictors',
      variantName: 'world-in-predictors',
    };
  });

  describe('Rendering', () => {
    let rendered = null;
    let winArticlepage = null;
    beforeEach(() => {
      rendered = mount(<WorldInArticle {...props} />);
      winArticlepage = rendered.find('.article-template');
    });

    it('renders a top level article.world-in-predictors-article-template', () => {
      winArticlepage.should.have.tagName('article');
      winArticlepage.should.have.className('world-in-predictors-article-template');
    });
  });
});
