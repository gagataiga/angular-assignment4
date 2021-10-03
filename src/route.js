(function () {
  "use strict";
  angular.module("MenuApp")
    .config(RoutesConfig);
  
  // injection
  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');
  // *** Set up UI states ***
    $stateProvider
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/template/home-template.html'
      })

      // categories
      .state("categories", {
        url: "/categories",
        templateUrl: "src/template/categories-template.html",
        controller: "CategoriesController as categories",
        resolve: {
          items: ["MenuDataService", function (MenuDataService) { 
            return MenuDataService.getAllCategories();
          }]
        }
      })
      
      // items 
      .state("items", {
        url: "/items",
        templateUrl: "src/template/items-tempalte.html"
      });    
  }
})();