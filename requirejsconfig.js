requirejs.config({
  paths: {
    can      : 'bower_components/canjs/amd/can',
    jquery   : 'bower_components/jquery/dist/jquery',
    mustache : 'bower_components/require-can-renderers/lib/mustache',
    stache   : 'bower_components/require-can-renderers/lib/stache',
    ejs      : 'bower_components/require-can-renderers/lib/ejs',
    lodash   : 'bower_components/lodash/dist/lodash',
    cucumber : 'bower_components/cucumber-js/release/cucumber',
  },
  shim : {
  	cucumber : {
  		exports : 'Cucumber'
  	}
  }
});