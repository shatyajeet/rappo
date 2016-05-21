'use strict';

var configParams = require('../constants/config');

var HTTPInterceptor = [function () {
  return {
    request: function (config) {
      config.url = configParams.API_URL + config.url;
      return config;
    }
  };
}];

module.exports = HTTPInterceptor;
