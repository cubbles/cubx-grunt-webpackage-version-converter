'use strict';

var Converter = require('cubx-webpackage-version-converter');
module.exports = function (grunt) {
  grunt.registerTask('_convertWebpackage', 'Convert the webpackage from modelVersion 8.x to modleVersion 9.1', function () {
    var webpackagePath = grunt.config.get('param.src');

    if (!webpackagePath) {
      webpackagePath = grunt.config.get('webpackagepath');
    }
    if (!webpackagePath) {
      throw new Error('webpackagePath missed. Please defined the option webpackagePath.');
    }
    var converter = new Converter(webpackagePath);
    converter.convert();
  });
};
