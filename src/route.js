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
        // url: "/items/{categoryShortName}",
        url: "/items/{categoryShortName}",
        templateUrl: "src/template/items-template.html",
        controller: "ItemController as itemCtrl",
        resolve: {
          items: ["$stateParams", "MenuDataService",
            function ($stateParams, MenuDataService) { 
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
        }
      });   
  }
})();