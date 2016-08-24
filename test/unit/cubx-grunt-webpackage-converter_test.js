/* globals describe,beforeEach,it,afterEach */
(function () {
  // function (manifestConverter, manifest831, convertedManifest910) {
  'use strict';
  var grunt;
  var fs;
  var path;
  var testRootPath;
  var manifestPath;
  var testPath;
  beforeEach(function (done) {
    var webpackageName = 'my-webpackage';
    path = require('path');
    fs = require('fs-extra');
    var tempPath = path.resolve(__dirname, '../resources/8.3.1/');
    testRootPath = path.join(process.cwd(), 'test');
    testPath = path.resolve(testRootPath, 'webpackages', webpackageName);
    manifestPath = path.resolve(testPath, 'manifest.webpackage');

    grunt = require('grunt');
    grunt.task.init = function () {};

    var taskPath = path.resolve(process.cwd(), 'tasks');
    grunt.task.loadTasks(taskPath);

    fs.copy(tempPath, testPath, function (err) {
      if (err) {
        throw new Error(err);
      }
      done();
    });
  });

  afterEach(function (done) {
    var testPathRoot = path.resolve(testRootPath, 'webpackages');
    fs.remove(testPathRoot, function (err) {
      if (err) {
        throw new Error(err);
      }
      done();
    });
  });
  describe('run grunt task "cubx-grunt-webpackage-version-converter", webpackage path configured in param.src', function () {
    beforeEach(function () {
      // Init config
      grunt.initConfig({
        param: {
          src: testPath
        }
      });
    });
    afterEach(function () {
      grunt.initConfig({});
    });
    it('shoud be changed the modelVersion', function (done) {
      grunt.tasks([ '_convertWebpackage' ], {}, function () {
        fs.readFile(manifestPath, 'utf8', function (err, data) {
          if (err) {
            throw new Error(err);
          } else {
            var manifest = JSON.parse(data);
            manifest.should.have.property('modelVersion', '9.1.0');
          }
          done();
        });
      });
    });
  });
  describe('run grunt task "cubx-grunt-webpackage-version-converter" webpackage path configured in cubx-grunt-webpackage-version-converter.webpacakgePath', function () {
    beforeEach(function () {
      // Init config
      grunt.initConfig({
        webpackagepath: testPath
      });
    });
    afterEach(function () {
      grunt.initConfig({});
    });
    it('shoud be changed the modelVersion', function (done) {
      grunt.tasks([ '_convertWebpackage' ], {}, function () {
        fs.readFile(manifestPath, 'utf8', function (err, data) {
          if (err) {
            throw new Error(err);
          } else {
            var manifest = JSON.parse(data);
            manifest.should.have.property('modelVersion', '9.1.0');
          }
          done();
        });
      });
    });
  });
})();
