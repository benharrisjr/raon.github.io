clickQuest.controller('ClickQuestController',
  function ClickQuestController($scope, $http) {
  	$scope.inventory = [];
  	$scope.currentParty = [];
  	$scope.availablePartyMembers = {};
  	var maxPartySize = 3;
  	$scope.currentGold = 0;
  	$scope.expTotal = 0;
  	var i = 0;
  	var p = 1;

  	function GetPartyMemberData(){
      $http({
        url: 'data/partyMembers.json',
        method: 'GET',
      }).success(function (data, status, headers, config){
        $scope.availablePartyMembers= data;
        console.log($scope.availablePartyMembers);
        $scope.status = status;
      }).error(function (data, status, headers, config){
        $scope.data = data || "Request failed";
        $scope.status = status;
      });
  	}
  	$scope.AddToParty = function AddToParty(newPartyMember, cost){
  		console.log(cost);
  		if ($scope.currentGold - cost >= 0){
  			$scope.currentGold -= cost;
  			if ($scope.currentParty.length < 3){
	  			$scope.currentParty.push(newPartyMember);
	  		  	p++;
	  		  	console.log($scope.currentGold);
		  	}
		  	else{
		  		console.log("too many party members, switch one out");
		  	}
  		}
	  	else{
	  		console.log("not enough gold");
	  	}
  	}
  	$scope.AddToInventory = function AddToInventory(){
  		$scope.inventory.push("new item" + i);
  		i++;
  	}

  	GetPartyMemberData();
  });