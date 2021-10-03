(function () {
  "use strict";
  angular.module("MenuApp")
    .component("categories", {
      templateUrl: "src/template/categories-list.html",
      bindings: {
        items: "<"
      }
    })
})();