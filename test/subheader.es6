/* eslint id-match: 0, id-length: 0 */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { WinSubheader, WinLeaderSubheader } from '../subheader';

import $ from 'teaspoon';
import chai from 'chai';
const should = chai.should();
describe('subheader', () => {

  it('has WinSubheader exposed', () => {
    should.exist(WinSubheader);
  });

  it('has WinLeaderSubheader exposed', () => {
    should.exist(WinLeaderSubheader);
  });

  describe('WinSubheader', () => {

    it('is compatible with React.Component', () => {
      WinSubheader.should.be.a('function').and.respondTo('render');
    });

    it('renders a React element', () => {
      React.isValidElement(<WinSubheader />).should.equal(true);
    });

    describe('Rendering', () => {

      let renderer;
      beforeEach(() => {
        renderer = createRenderer();
      });

      it('should contain the data passed in within its HTML structure', () => {
        renderer.render(
          <WinSubheader
            sectionName={'The section name'}
            byline={'the byline'}
            publishDate={'2015-09-29T16:45:56.698Z'}
          />, {});
        const out = $(renderer.getRenderOutput());
        out.first('.ArticleTemplate--byline').text().should.equal('the byline');
        out.first('.ArticleTemplate--pubdate').text().should.equal('Tue Sep 29 2015');
        out.first('.ArticleTemplate--section-section').text().should.equal('The section name');
      });

    });

  });

  describe('WinLeaderSubheader', () => {

    it('is compatible with React.Component', () => {
      WinLeaderSubheader.should.be.a('function').and.respondTo('render');
    });

    it('renders a React element', () => {
      React.isValidElement(<WinLeaderSubheader />).should.equal(true);
    });

    describe('Rendering', () => {

      let renderer;
      beforeEach(() => {
        renderer = createRenderer();
      });

      it('should contain the data passed in within its HTML structure', () => {
        renderer.render(
          <WinLeaderSubheader
            sectionName={'The section name'}
            publishDate={'2015-09-29T16:45:56.698Z'}
          />, {});
        const out = $(renderer.getRenderOutput());
        out.first('.ArticleTemplate--pubdate').text().should.equal('Tue Sep 29 2015');
        out.first('.ArticleTemplate--section-section').text().should.equal('The section name');
      });

    });

  });

});
