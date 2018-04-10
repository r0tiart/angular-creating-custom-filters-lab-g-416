function City() {
    return function (list, cityFilter) {
    	return list.filter(function(item){
    		return item.location.city === cityFilter;
    	})
    };
}
 
angular
    .module('app')
    .filter('city', City);