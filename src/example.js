import 'babel-polyfill';
import Impart from '@economist/component-react-async-container';
import Loading from '@economist/component-loading';
import React from 'react';
import WorldInArticle from './';
import fetch from 'isomorphic-fetch';

function fetchArticle() {
  return fetch('/stubbed/article.json')
    .then((response) => (response.json()));
}

function handleLoading() {
  return <Loading />;
}

function handleFailure(errorDetails) {
  return (
    <div>Error: {errorDetails.message}</div>
  );
}

export default (
  <Impart.RootContainer
    Component={WorldInArticle}
    route={fetchArticle}
    renderLoading={handleLoading}
    renderFailure={handleFailure}
  />
);
