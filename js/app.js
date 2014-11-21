(function()
{
	var app = angular.module('directory', []);
	
	var directoryInfo =
	[
		{
			image: 		'img/Casie.png',
			name: 		'Casie Lancaster',
			life: 		112,
			strength:	64,
			agility:	98,
			stamina:	55,
			wisdom:		188
		},
		{
			image: 		'img/Mors.png',
			name: 		'M',
			life: 		248,
			strength:	124,
			agility:	56,
			stamina:	187,
			wisdom:		42
		}
		
	];
	
	app.service('profileService', function()
	{
			var profileInfo = {};
			
			var returnFunctions =
			{
				getProfile : function()
				{
					return profileInfo;
				},
				setProfile : function(data)
				{
					profileInfo = data;
				},
				clearProfile : function()
				{
					profileInfo = {};	
				}
			};
			
			return returnFunctions;

	});
	
	app.controller('SearchController', function($scope, profileService)
	{
		$scope.directory = directoryInfo;
		$scope.searchText = "";
		$scope.numberOfResults = $('#sel_filter').val();
		$scope.profile = {};
		
		$scope.changeNumberOfEntries = $('#sel_filter').change(function()
		{
			$scope.numberOfResults = $(this).val();
			$scope.profile = {};
		});
		
		$scope.clearProfile = $('#txt-searchInfo').focus(function()
		{
			$scope.profile = {};
		});
		
		$scope.viewProfile = function(data)
		{
			profileService.setProfile(data);
			$scope.profile = profileService.getProfile();
		};
	});
	
	
	
	app.directive('searchInfo', function()
	{
		
		var directive = {};

		directive.restrict = 'E'; 
	
		directive.templateUrl = "search-info.html";
	
		return directive; 
	});
	
	app.directive('profileInfo', function()
	{
		var directive = {};

		directive.restrict = 'E'; 
	
		directive.templateUrl = "profile-info.html";
	
		return directive; 
	});
	
	
	
})();