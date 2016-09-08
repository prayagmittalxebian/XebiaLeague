apl.controller('AplController', ['$scope', 'data', 'playerService', 'teamService',
    function ($scope, Data, PlayerService, TeamService) {
        var flag = true;
        $scope.players = PlayerService.getPlayers();
        Data.saveListOfPlayers($scope.players);
        $scope.maxPoints = 2500;
        $scope.randomIndices = JSON.parse(localStorage.getItem('indices')) || [];

        $scope.teams = [];
        $scope.teamA = {};
        $scope.teamB = {};

        calculateTeams();

        function calculateTeams() {
            $scope.teams = TeamService.getTeams($scope.players);
            $scope.teamA = $scope.teams[0];
            $scope.teamB = $scope.teams[1];
        }


        function buyingAllowed(playerCost, team) {
            if ((10 - $scope[team].playersBought) == 0 && playerCost >= 100 && (parseInt($scope[team].currentCost, 10) + parseInt(playerCost, 10) <= 2500)) {
                flag = true;
                return true;
            }
            if ((10 - $scope[team].playersBought) < 0 && ($scope.maxPoints - parseInt($scope[team].currentCost, 10) - parseInt(playerCost, 10) >= 0)) {
                flag = true;
                return true;
            }

            if ($scope.maxPoints - parseInt($scope.teamA.currentCost, 10) < 100 && $scope.maxPoints - parseInt($scope.teamB.currentCost, 10) < 100) {
                flag = false;
                return true;
            }

            flag = true;
            if ((($scope.maxPoints - parseInt($scope[team].currentCost, 10) - parseInt(playerCost, 10)) / (11 - (parseInt($scope[team].playersBought) + 1))) > 100) {
                if (($scope.maxPoints - parseInt($scope[team].currentCost, 10) - parseInt(playerCost, 10)) < 0 && (11 - (parseInt($scope[team].playersBought) + 1)) < 0) {
                    return false;
                }
                return true;
            }
        }

        $scope.getRandomPlayer = function () {
            $scope.randomIndex = Math.floor(Math.random() * ($scope.players.length));
            if (_.contains($scope.randomIndices, $scope.randomIndex) && $scope.randomIndices.length < (_.filter($scope.players, function (player) {
                    return player.sold == false
                })).length) {
                $scope.getRandomPlayer();
            }
            else if (_.contains($scope.randomIndices, $scope.randomIndex) && $scope.randomIndices.length == (_.filter($scope.players, function (player) {
                    return player.sold == false
                })).length) {
                $scope.randomIndices = [];
                localStorage.setItem('indices', JSON.stringify($scope.randomIndices));
            }
            else if ($scope.players[$scope.randomIndex].sold == false) {
                $scope.currentPlayer = $scope.players[$scope.randomIndex];
                $scope.randomIndices.push($scope.randomIndex);
                localStorage.setItem('indices', JSON.stringify($scope.randomIndices));
            } else {
                $scope.getRandomPlayer();
            }
        };

        $scope.$watch('players', function () {
            calculateTeams();
        }, true);

        $scope.addToTeam = function (playerCost, team) {
            if ($scope.currentPlayer == '' || $scope.currentPlayer == undefined) {
                alert('Choose a player');
                return undefined;
            }

            if (playerCost == 0 || !playerCost) {
                alert('Enter a valid player cost');
                return undefined;
            }


            if (buyingAllowed(playerCost, team)) {
                $scope.players[$scope.randomIndex].team = team;
                $scope.players[$scope.randomIndex].sold = true;
                if (!flag) {
                    $scope.players[$scope.randomIndex].cost = 0;
                }
                else {
                    $scope.players[$scope.randomIndex].cost = playerCost;
                }
                Data.saveListOfPlayers($scope.players);
                $scope.players = Data.getListOfPlayers();
                $scope.randomIndices = _.without($scope.randomIndices, $scope.randomIndex);
                localStorage.setItem('indices', JSON.stringify($scope.randomIndices));
                $scope.currentPlayer = '';
            }
            else {
                alert("This team cannot buy the player for this amount. Reduce the amount and re-try");
            }
        };

        $scope.removePlayer = function (player) {
            player.sold = false;
            player.cost = 100;
            player.team = '';
            Data.saveListOfPlayers($scope.players);
        }
    }
]);
