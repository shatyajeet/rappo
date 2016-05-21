'use strict';
var config = require('../constants/config');

var TokenService = [function () {
  return {
    getToken: function () {
      return config.TOKEN;
    }
  };
}];

module.exports = TokenService;
