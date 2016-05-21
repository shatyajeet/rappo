'use strict';

require('materialize-css');

var MaterializeService = [function () {
  return {
    updateTextFields: function () {
      Materialize.updateTextFields();
    }
  };
}];

module.exports = MaterializeService;
