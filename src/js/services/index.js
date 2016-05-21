'use strict';

var rappoApp = require('angular').module('rappoApp');

rappoApp.factory('HTTPInterceptor', require('./HTTPInterceptor'));
rappoApp.factory('FormService', require('./FormService'));
rappoApp.factory('MaterializeService', require('./MaterializeService'));
rappoApp.factory('TokenService', require('./TokenService'));
