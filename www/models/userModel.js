/*http://draptik.github.io/blog/2013/07/28/restful-crud-with-angularjs/*/
angular.module('userModule')
.factory('userModel',function($resource){
	var END_POINT='users/:id';
	  return $resource(END_POINT, {}, {
        query: 	{ method: 'GET', isArray: true },
        create: { method: 'POST' },
        show: 	{ method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })	
})
