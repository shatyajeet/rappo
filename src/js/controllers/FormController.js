'use strict';

var FormController = ['FormService', 'MaterializeService', function (FormService, MaterializeService) {
  MaterializeService.updateTextFields();
  var self = this;
  self.credentials = [];
  self.fetchingCredentials = false;
  self.fetchedFor = '';
  self.fetchedOnce = false;
  self.lookup = {
    email: ''
  };

  self.getCredentials = function (evt) {
    evt.preventDefault();
    
    self.fetchingCredentials = true;
    self.credentials = [];
    
    FormService.fetchCredentials(self.lookup)
      .then(function (res) {
        var credentials = res.data.credentials;
        
        if (credentials.length) {
          credentials = credentials.map(function (credential, index) {
            credential.issued_on = new Date(credential.issued_on).getTime();
            return credential;
          });
        }
        
        self.credentials = credentials;
        self.fetchedFor = angular.copy(self.lookup.email);
        
        self.fetchingCredentials = false;
        self.fetchedOnce = true;
      }, function (err) {
        console.log(err);
      });
  };
}];

module.exports = FormController;
