(function () {
  "use strict";
  angular.module("MenuApp")
    .controller("ItemController", ItemController);
    ItemController.$inject = ["items"];
  
  function ItemController(items) {
    let self = this;
    console.log("menu details;",items);
    self.items = items;
    self.message = "hoge ほげ";
  }
})();