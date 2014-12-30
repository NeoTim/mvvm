//////////////////////////////////////////////
///
///     mvvm
///     https://github.com/joelcoxokc/mvvm
///     2014, JoelCox
///
'use strict';
/////////////////////////////
///     Module Dependencies
var express = require('express'),
    path    = require('path');

var configuation = {

    DATABASE_URI:      '',

    someAP: {
        API_ID:        '',
        API_KEY:       '',
        API_TOKEN:     '',
        API_SECRET:    '',
        API_CALLBACK:  '',
    },

    anotherAPI: {
        API_ID:        '',
        API_KEY:       '',
        API_TOKEN:     '',
        API_SECRET:    '',
        API_CALLBACK:  '',
    }
}
/////////////////////////////////
///     @Environment Configuation
///     @NODE_ENV        production
///
module.exports = function(app){


    app.set(  'env',     'production'      );
    app.set(  'config',  configuation      );
    app.set(  'appPath', rootDir('.tmp')   );
    app.set(  'appPath', rootDir('client') );

    app.use( express.static(app.get('appPath')) );

  function rootDir( dir ){
    return path.join( app.get('root'), dir )
  }
}