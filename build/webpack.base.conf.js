'use strict';

const path = require('path');
// path config
const paths = require('path');

module.exports = {
  entry: {
    app: '/src/index.ejs',
  },
  output: {
    filename: "js/bundle.js",
    path: paths.appBuild,
  }
};