apl.controller('AplController', ['$scope', 'data', 'playerService', 'teamService', '$mdDialog',
    function ($scope, Data, PlayerService, TeamService, $mdDialog) {
        $scope.players = PlayerService.getPlayers();
        Data.saveListOfPlayers($scope.players);
        $scope.maxPoints = 2500;

        $scope.teams = [];

        calculateTeams();

        $scope.getImage = function (player) {
            return PlayerService.getImage(player);
        }

        function calculateTeams() {
            $scope.teams = TeamService.getTeams($scope.players);
        }

        function buyingAllowed(player, playerCost, index) {
            $scope.currentTeam = $scope.teams[index];
            //
            // // can not have more than 9 male players
            // if (PlayerService.isMale(player) && $scope.currentTeam.malePlayers > 8) {
            //     alert("You already have selected maximum no's of Male player. Go for Female");
            //     return false;
            // }

            //already 11 players selected

            if ($scope.currentTeam.playersBought > 10) {
                alert("You already have selected maximum no's of player");
                return false;
            }

            if ((parseInt($scope.currentTeam.currentCost, 10) + parseInt(playerCost, 10) ) <= $scope.maxPoints) {
                return true;
            }
            alert("You don't have enough points to buy this player. Reduce the amount and re-try");
            return false;

        }

        $scope.getRandomPlayer = function () {
            $scope.randomIndex = Math.floor(Math.random() * ($scope.players.length));
            if (!$scope.players[$scope.randomIndex].sold)
                $scope.currentPlayer = $scope.players[$scope.randomIndex];
            else
                $scope.getRandomPlayer();

        };

        $scope.$watch('players', function () {
            calculateTeams();
        }, true);

        $scope.addToTeam = function (playerCost, teamIndex) {
            if ($scope.currentPlayer == '' || $scope.currentPlayer == undefined) {
                alert('Choose a player');
                return undefined;
            }

            if (playerCost == 0 || !playerCost) {
                alert('Enter a valid player cost');
                return undefined;
            }


            if (buyingAllowed($scope.currentPlayer, playerCost, teamIndex)) {
                $scope.players[$scope.randomIndex].team = $scope.teams[teamIndex].name;
                $scope.players[$scope.randomIndex].sold = true;
                $scope.players[$scope.randomIndex].cost = playerCost;
                Data.saveListOfPlayers($scope.players);
                $scope.players = Data.getListOfPlayers();
                // $scope.randomIndices = _.without($scope.randomIndices, $scope.randomIndex);
                // localStorage.setItem('indices', JSON.stringify($scope.randomIndices));
                $scope.ShowCongratulations();
                // $scope.currentPlayer = '';
            }
        };

        $scope.removePlayer = function (player) {
            player.sold = false;
            player.cost = 100;
            player.team = '';
            Data.saveListOfPlayers($scope.players);
        };

        $scope.showCustom = function (event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                parent: angular.element(document.body),
                targetEvent: event,
                preserveScope: true,
                templateUrl: 'playerList.html',
                fullscreen: true,
                controller: function DialogController($scope, $mdDialog, playerService) {
                    $scope.players = playerService.getPlayers();
                    $scope.closeDialog = function () {
                        $mdDialog.hide();
                    }
                }
            });
        };

        $scope.playerSelectionDialog = function (event) {
            $scope.getRandomPlayer();
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                parent: angular.element(document.body),
                targetEvent: event,
                preserveScope: true,
                templateUrl: 'playerSelection.html',
                fullscreen: true
            });
        };

        $scope.ShowCongratulations = function () {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                parent: angular.element(document.body),
                preserveScope: true,
                templateUrl: 'selectedPlayer.html',
            });
        };
    }

])
;
