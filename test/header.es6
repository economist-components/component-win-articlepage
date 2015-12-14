/* eslint id-match: 0, id-length: 0 */
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { WinHeader, WinPredictorsHeader, WinNumbersHeader } from '../header';

import $ from 'teaspoon';
import chai from 'chai';
const should = chai.should();
describe('header', () => {
  const renderer = createRenderer();
  it('has WinHeader exposed', () => {
    should.exist(WinHeader);
  });

  it('has WinFooter exposed', () => {
    should.exist(WinPredictorsHeader);
  });

  describe('WinHeader', () => {
    it('is compatible with React.Component', () => {
      WinHeader.should.be.a('function').and.respondTo('render');
    });

    it('renders a React element', () => {
      React.isValidElement(<WinHeader />).should.equal(true);
    });

    describe('Rendering', () => {
      it('should contain the data passed in within its HTML structure', () => {
        renderer.render(
          <WinHeader
            mainImage={{
              'sources': [
                { 'url': 'https://placehold.it/1792x1008', 'width': 896, 'height': 504, 'dppx': 1 },
              ],
            }}
            flytitle={'Pretty fly'}
            title={'For a white guy'}
            rubric={'uno dos tres cuatro cinco cinco seis'}
          />, {});
        const out = $(renderer.getRenderOutput());
        out.first('.ArticleTemplate--image')[0].props.sources[0].url.should.equal('https://placehold.it/1792x1008');
        out.first('.ArticleTemplate--flytitle').text().should.equal('Pretty fly');
        out.first('.ArticleTemplate--title').text().should.equal('For a white guy');
        out.first('.ArticleTemplate--rubric').text().should.equal('uno dos tres cuatro cinco cinco seis');
      });

    });

  });

  describe('WinPredictorsHeader', () => {
    it('is compatible with React.Component', () => {
      WinPredictorsHeader.should.be.a('function').and.respondTo('render');
    });

    it('renders a React element', () => {
      React.isValidElement(<WinPredictorsHeader />).should.equal(true);
    });

    describe('Rendering', () => {
      it('should contain the data passed in within its HTML structure', () => {
        renderer.render(
          <WinPredictorsHeader
            mainImage={{
              'sources': [
                { 'url': 'https://placehold.it/1792x1008', 'width': 896, 'height': 504, 'dppx': 1 },
              ],
            }}
            flytitle={'Pretty fly'}
            title={'For a white guy'}
            rubric={'uno dos tres cuatro cinco cinco seis'}
          />, {});
        const out = $(renderer.getRenderOutput());
        out.first('.ArticleTemplate--image')[0].props.sources[0].url.should.equal('https://placehold.it/1792x1008');
        out.first('.ArticleTemplate--flytitle').text().should.equal('Pretty fly');
        out.first('.ArticleTemplate--title').text().should.equal('For a white guy');
        out.first('.ArticleTemplate--rubric').text().should.equal('uno dos tres cuatro cinco cinco seis');
      });
    });
  });

  describe('WinNumbersHeader', () => {
    it('is compatible with React.Component', () => {
      WinNumbersHeader.should.be.a('function').and.respondTo('render');
    });

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
});
