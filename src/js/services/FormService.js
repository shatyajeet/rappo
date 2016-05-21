'use strict';

var FormService = ['$http', 'TokenService', function ($http, TokenService) {
  var getCredentials = function (obj) {
    var credOptions = {
      url: '/v1/frontend/recipient_credentials',
      method: 'POST',
      data: {
        email: obj.email,
        token: TokenService.getToken()
      }
    };
    
    return $http(credOptions);
  };
  
  return {
    fetchCredentials: getCredentials
  };
}];

module.exports = FormService;
