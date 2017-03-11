(function(){
	"use strict";
	angular
		.module("user")
		.controller("EducationInformationCtrl",
					["$http",
					 "$window",
					 "$state",
					 "educationInformationService",
					 EducationInformationCtrl]);
	
	function EducationInformationCtrl($http, $window, $state, educationInformationService) {
		
		var vm = this;	
		vm.qualificationList = [];
		if($state.params.success != null)
			vm.success = $state.params.success;
		
		vm.accessToken = $window.bearer_token;
		vm.accessTokenParam = "?access_token=" + vm.accessToken;

		educationInformationService.getListofQualification(vm.accessTokenParam)
		.success(function (data, status, headers, config) {
			vm.qualificationList = data;
			/*vm.listofQualification = data;
			angular.forEach(vm.listofQualification, function(value, key) {
				if(value.subQualificationList == null) {
					vm.qualificationList.push(value);
				}
				else {
					angular.forEach(value.subQualificationList, function(childvalue, key) {
						childvalue.qualificationMainLevel = value.qualificationMainLevel;
						vm.qualificationList.push(childvalue);
					});
				}
			});
			vm.listofQualification = null;*/
		})
		.error(function (data, status, headers, config) {
			vm.qualificationList = data;
			/*vm.listofQualification = {};*/
        });
		
		vm.qualificationDetail = function(qualificationMainLevel, qualificationSubLevel) {
			var view = mapView(qualificationMainLevel);
						
			$state.go("qualificationDetail", {qualification:view ,qualificationMainLevel:qualificationMainLevel, qualificationSubLevel:qualificationSubLevel});
		}
		
		vm.createNewQualification = function(qualificationMainLevel, qualificationSubLevel) {
			var view = mapView(qualificationMainLevel);						
			$state.go("qualificationDetail", {qualification:view ,qualificationMainLevel:qualificationMainLevel, qualificationSubLevel:qualificationSubLevel, newQualification:true});
		}
		
		var mapView = function(qualificationMainLevel) {
			var view = "";
			if(qualificationMainLevel == 1)
				view = "ssc";
			else if(qualificationMainLevel == 2)
				view = "11th";
			else if(qualificationMainLevel == 3)
				view = "hsc";
			else if(qualificationMainLevel == 4)
				view = "diploma";
			
			return view;
		} 
	};
	
}());