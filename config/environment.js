/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'acn',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' http://ajax.googleapis.com/ http://10.15.3.32/ http://framework-gb.cdn.gob.mx/ localhost:35729",
      //'script-src': "'self' 'unsafe-inline' 'unsafe-eval' http://10.15.9.7:35729 192.168.56.102:35729", // FOR SERVER
      'font-src': "'self' 'unsafe-inline' 'unsafe-eval' http://framework-gb.cdn.gob.mx data: http://fonts.gstatic.com",
      'connect-src': "'self' http://10.15.3.32 http://framework-gb.cdn.gob.mx http://10.15.3.32/  ws://localhost:35729",
      //'connect-src': "'self' http://www.gob.mx/cms/tramites/api http://104.131.29.89:3000 ws://104.131.29.89:35729 ws://localhost:35729", // FOR SERVER
      'img-src': "'self' http://framework-gb.cdn.gob.mx",
      'style-src': "'self' 'unsafe-inline' 'unsafe-eval' http://framework-gb.cdn.gob.mx/ fonts.googleapis.com",
      'media-src': "'self'"
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.REST_WS = 'http://10.15.3.32/ActaNac/RestService/ActaNac/'
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
