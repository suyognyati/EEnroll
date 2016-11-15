(function(){
	"use strict";
	var app = angular.module("admission");
	
	app.config(["$stateProvider",
	            "$urlRouterProvider",
	            "$httpProvider",
		         function($stateProvider, $urlRouterProvider, $httpProvider){
		
					//$httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
				    /*$httpProvider.interceptors.push(function() {
				        return {
				            response: function(response) {
				                $httpProvider.defaults.headers.common['X-XSRF-TOKEN'] = response.headers('XSRF-TOKEN');
				                return response;
				            }
				        }    
				    });*/
		
					/*$httpProvider.defaults.xsrfCookieName = 'csrftoken';
				    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';*/
					
				    $urlRouterProvider.otherwise("/basicdetails");
					
					$stateProvider
					
					.state("basicDetail",{
							url: "/basicdetails",
							views: {
								"view":{
				                	templateUrl:"/Web/user/templates/states/basicDetailView.html",
				                	controller:"BasicDetailCtrl as vm",
								}
							},
							resolve: {
								basicDetail : ['$ocLazyLoad', function($ocLazyLoad){
									return $ocLazyLoad.load({
										name : 'admission',
										files : [
										     '/Web/user/app/controllers/basicDetailCtrl.js',
										     '/Web/user/common/services/basicDetailService.js'
										]
								
									})
								}]
							}
					})
					
					/*.state("basicDetail",{
							url: "/basicdetails",
							templateUrl:"static/templates/states/basicDetailView.html",
							controller:"BasicDetailCtrl as vm",
							resolve: {
								basicDetail : ['$ocLazyLoad', function($ocLazyLoad){
									return $ocLazyLoad.load({
										name : 'admission',
										files : [
										     'static/app/controllers/basicDetailCtrl.js'
										]
								
									})
								}]
							}
					})*/
					
					.state("personalDetail",{
							url: "/personaldetails",
							views: {
								"view":{
									templateUrl:"/Web/user/templates/states/personalDetailView.html",
									controller:"PersonalDetailCtrl as vm",
								}
							},
							resolve: {
								personalDetail : ['$ocLazyLoad', function($ocLazyLoad){
									return $ocLazyLoad.load({
										name : 'admission',
										files : [
										     '/Web/user/app/controllers/personalDetailCtrl.js',
										     '/Web/user/common/services/personalDetailService.js'
										]
								
									})
								}]
							}
					})
					
					.state("educationInformation",{
							url: "/educationinformation",
							views: {
								"view":{
									templateUrl:"/Web/user/templates/states/educationInformationView.html",
									controller:"EducationInformationCtrl as vm",
								}
							},
							resolve: {
								basicDetail : ['$ocLazyLoad', function($ocLazyLoad){
									return $ocLazyLoad.load({
										name : 'admission',
										files : [
										     '/Web/user/app/controllers/educationInformationCtrl.js'
										]
								
									})
								}]
							}
					})
					
					.state("familyInformation",{
							url: "/familyinformation",
							views: {
								"view":{
									templateUrl:"/Web/user/templates/states/familyInformationView.html",
									controller:"FamilyInformationCtrl as vm",
								}
							},
							resolve: {
								basicDetail : ['$ocLazyLoad', function($ocLazyLoad){
									return $ocLazyLoad.load({
										name : 'admission',
										files : [
										     '/Web/user/app/controllers/familyInformationCtrl.js'
										]
								
									})
								}]
							}
					})
					
					.state("otherInformation",{
							url: "/otherinformation",
							views: {
								"view":{
									templateUrl:"/Web/user/templates/states/otherInformationView.html",
									controller:"OtherInformationCtrl as vm",
								}
							},
							resolve: {
								basicDetail : ['$ocLazyLoad', function($ocLazyLoad){
									return $ocLazyLoad.load({
										name : 'admission',
										files : [
										     '/Web/user/app/controllers/otherInformationCtrl.js'
										]
								
									})
								}]
							}
					})
					
			}]
		);
	
}());