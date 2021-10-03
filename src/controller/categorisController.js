(function () {
  "use strict";

  angular.module("MenuApp")
    .controller("CategoriesController", CategoriesController);
  CategoriesController.$inject = ["items"];
  
  function CategoriesController(items) {
    let self = this;
    console.log("main category items; ", items);
    self.items = items;
  }
})();