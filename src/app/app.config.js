angular.module('invertedIndexApp')
  .config(['$routeProvider',
    ($routeProvider) => {
  	  $routeProvider
  	    .when('/home', {
  	  	  template: '<home-comp></home-comp>'
  	    })
  	    .when('/uploads', {
  	  	  template: '<upload-comp></upload-comp>'
  	    })
  	    .otherwise('/home');
  }
]);