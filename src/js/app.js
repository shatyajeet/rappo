'use strict';

var $ = require('jquery');
var angular = require('angular');
var ngMessages = require('angular-messages');
var rappoApp = angular.module('rappoApp', ['ngMessages']);

require('./services');
require('./controllers');
require('./directives');

rappoApp.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push('HTTPInterceptor');
}]);
