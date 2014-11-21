(function()
{
	var app = angular.module('directory', []);
	
	var directoryInfo =
	[
		{
			image: 		"img/Casie.png",
			name: 		"Casie Lancaster",
			life: 		112,
			strength:	64,
			agility:	98,
			stamina:	55,
			wisdom:		188
		},
		{
			name: 		"Mors Westford",
			image: 		"img/Mors.png",
			
			life: 		248,
			strength:	124,
			agility:	56,
			stamina:	187,
			wisdom:		42
		},
		
		{
			image: 		"img/Arrow.png",
			name: 		"Arrow",
			life: 		312,
			strength:	154,
			agility:	200,
			stamina:	288,
			wisdom:		45
		},
		{
			image: 		'img/BronzeKnife.png',
			name: 		'Bronze Knife',
			life: 		'',
			strength:	'+5',
			agility:	'',
			stamina:	'',
			wisdom:		''
		},
		{
			image: 		'img/OakStaff.png',
			name: 		'Oak Staff',
			life: 		'',
			strength:	'',
			agility:	'',
			stamina:	'',
			wisdom:		'+ 10'
		},
		{
			image: 		'img/StoneAxe.png',
			name: 		'Stone Axe',
			life: 		'',
			strength:	'+35',
			agility:	'',
			stamina:	'',
			wisdom:		''
		},
		{
			image: 		'img/HunterBow.png',
			name: 		"Hunter's Bow",
			life: 		'',
			strength:	'+15',
			agility:	'+20',
			stamina:	'',
			wisdom:		''
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
		
		$scope.temp = [];
		for(var i = 0; i < directoryInfo.length; i++)
		{
			$scope.temp[i] = 
			{ 
				name: directoryInfo[i].name
			};
		}
		
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