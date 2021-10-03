(function () {
  "use strict";
  angular.module("data")
    .service("MenuDataService", MenuDataService)
    .constant("ApiBasePath", {
      mainCategoryPath: "https://davids-restaurant.herokuapp.com/categories.json",
      categoryDetailPath: "https://davids-restaurant.herokuapp.com/menu_items.json?category="
    });
  
  // injecter
  MenuDataService.$inject = ["$http", "ApiBasePath"];
 
  /**
   * 
   * @param {*} $http 
   * @param {*} ApiBasePath 
   */

  function MenuDataService($http,ApiBasePath) { 
     let service = this; 
     service.items = [];
    // This method return all main categories
    /**
     * 
     * @returns categories list
     * 
     */
    service.getAllCategories = () => { 
     const response = $http({
        method: "GET",
        url: ApiBasePath.mainCategoryPath
      })
      return response.then(function success(result) { 
        service.items = result.data;
        return service.items;
      }).catch(function error(error) { 
        alert(error);
      })
    }


    service.getItemsForCategory = (categoryShortName) => { 
      console.log(categoryShortName);
      const response = $http({
        method: "GET",
        url: ApiBasePath.categoryDetailPath,
        params: {
          category: categoryShortName
        }
      })
      return response.then(function success(result) { 
        service.items = result.data.menu_items;
        console.log("getItemsForCategory",service.items);
        return service.items;
      }).catch(function error(error) { 
        alert(error);
      })
    }

  }
})();