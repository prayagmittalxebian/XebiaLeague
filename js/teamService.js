apl.factory('teamService', function (data, playerService) {
    var myTeams = ['Strikers', 'Hotshots', 'Phantoms', 'Beasts'];
    getTeamInfo = function (team, players) {
        var cost = 0, counter = 0, malePlayers = 0;
        for (var i = 0; i < players.length; i++) {
            if (players[i].team == team) {
                cost += parseInt(players[i].cost, 10);
                if (playerService.isMale(players[i])) {
                    malePlayers++;
                }

                counter++;
            }
        }
        return {
            name: team,
            currentCost: cost,
            playersBought: counter,
            malePlayers: malePlayers
        }
    }
    return {
        getTeams: function (players) {
            var teams = [];
            angular.forEach(myTeams, function (value) {
                var teamInfo = getTeamInfo(value, players);
                teams.push(teamInfo);
            });
            return teams;

        }
    }


});
