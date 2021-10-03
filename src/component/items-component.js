(function () {
  "use strict";
  angular.module("MenuApp")
    .component("items", {
      templateUrl: "src/template/items-list.html",
      bindings: {
        items: "<"
      }
    })
})();