'use strict';

var defaultSrc = [function () {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {
      iElement.bind('error', function () {
        iAttrs.$set('src', iAttrs.defaultSrc);
      })
    }
  }
}];

module.exports = defaultSrc;
