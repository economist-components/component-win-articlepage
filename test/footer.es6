/* eslint id-match: 0, id-length: 0 */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { WinFooter } from '../footer';

import $ from 'teaspoon';
import chai from 'chai';
const should = chai.should();
describe('footer', () => {

  it('has WinFooter exposed', () => {
    should.exist(WinFooter);
  });

  describe('WinFooter', () => {

    it('is compatible with React.Component', () => {
      WinFooter.should.be.a('function').and.respondTo('render');
    });

    it('renders a React element', () => {
      React.isValidElement(<WinFooter />).should.equal(true);
    });

    describe('Rendering', () => {

      let renderer = '';
      beforeEach(() => {
        renderer = createRenderer();
      });

      it('should contain the data passed in within its HTML structure', () => {
        renderer.render(
          <WinFooter
            byline={'the byline'}
            bylineLocation={'the byline location'}
            bio={'the bio'}
          />, {}
        );

        const out = $(renderer.getRenderOutput());
        out.first('.ArticleTemplate--byline')
          .text()
          .should.equal('the byline');

        out.first('.ArticleTemplate--byline-location')
          .text()
          .should.equal('the byline location');

        out.first('.ArticleTemplate--byline-bio')[0] // eslint-disable-line
          .props.dangerouslySetInnerHTML.__html
          .should.equal('the bio');
      });

    });

  });

});
