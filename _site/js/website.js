angular.module('website', []).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {templateUrl:'home.html'}).
      // when('/edit/:projectId', {controller:EditCtrl, templateUrl:'detail.html'}).
      // when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).
      otherwise({redirectTo:'/'});
  });