import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import article from './data/article';
import WorldInArticle from '..';

import chai from 'chai';
const should = chai.should();
describe('variant-article', () => {

  it('has WorldInArticle exposed as default', () => {
    should.exist(WorldInArticle);
  });

  describe('WorldInArticle', () => {

    it('is compatible with React.Component', () => {
      WorldInArticle.should.be.a('function');
    });

    it('renders a React element', () => {
      React.isValidElement(
        <WorldInArticle
          id={article.id}
          slug={article.attributes.slug}
          title={article.attributes.title}
          flytitle={article.attributes.flytitle}
          rubric={article.attributes.rubric}
          mainImage={{
            src: article.attributes.mainimage,
            alt: article.attributes.imagealt,
          }}
          content={article.attributes.content}
          sectionName={article.attributes.section}
        />).should.equal(true);
    });

    describe('Rendering', () => {

      let renderer;
      beforeEach(() => {
        renderer = createRenderer();
      });

      it('should render world-in-main by default', () => {
        renderer.render(<WorldInArticle
          id={article.id}
          slug={article.attributes.slug}
          title={article.attributes.title}
          flytitle={article.attributes.flytitle}
          rubric={article.attributes.rubric}
          mainImage={{
            src: article.attributes.mainimage,
            alt: article.attributes.imagealt,
          }}
          content={article.attributes.content}
          sectionName={article.attributes.section}
          variantName={'world-in-main'}
        />, {});
        const renderOutput = renderer.getRenderOutput();
        const variantName = renderOutput.props.variantName;
        const components = renderOutput.props.components;
        variantName.should.equal('world-in-main');
      });

      it('should render world-in-predictors when passed a particular section', () => {
        renderer.render(
          <WorldInArticle
            id={article.id}
            slug={article.attributes.slug}
            title={article.attributes.title}
            flytitle={article.attributes.flytitle}
            rubric={article.attributes.rubric}
            mainImage={{
              src: article.attributes.mainimage,
              alt: article.attributes.imagealt,
            }}
            content={article.attributes.content}
            sectionName={'Predictors'}
            variantName={'world-in-predictors'}
          />, {});
        const renderOutput = renderer.getRenderOutput();
        const variantName = renderOutput.props.variantName;
        const components = renderOutput.props.components;
        variantName.should.equal('world-in-predictors');
      });

    });

  });

});
