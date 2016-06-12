'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ts-gulp-mocha:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'));
  });

  it('creates files', function () {
    assert.file([
      'gulpfile.js',
      'package.json',
      'typings.json',
    ]);
  });
});
