(function () {
  "use strict";

  angular.module("MenuApp")
    .controller("CategoriesController", CategoriesController);
  CategoriesController.$inject = ["items"];
  
  function CategoriesController(items) {
    let self = this;
    self.items = items;
  }
})();