# cubx-grunt-webpackage-version-converter

[![Build Status](https://travis-ci.org/cubbles/cubx-webpackage-version-converter.svg?branch=master)](https://travis-ci.org/cubbles/cubx-webpackage-version-converter.svg?branch=master)

Grunt plugin for convert webpackages from modelVersion 8.x to modelVersion 9.1
 
## Usage:

### default

install the grunt plugin 
    
    npm install cubx-grunt-webpackage-version-converter --save-dev

Gruntfile

* load the grunt plugin
    
    
    grunt.loadNpmTasks(cubx-grunt-webpackage-version-converter)
        
* set config (path to webpackage to convert 
    
        
    grunt.initConfig({
       webpackagepath: ...
    });

 
### integrate in devtools: 
* Just install grunt plugin
  
  
    npm install cubx-grunt-webpackage-version-converter --save
 

