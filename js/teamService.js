apl.factory('teamService', function (data) {
    getTeamInfo = function (team, players) {
        var cost = 0, counter = 0;
        for (var i = 0; i < players.length; i++) {
            if (players[i].team == team) {
                cost += parseInt(players[i].cost, 10);
                counter++;
            }
        }
        return {
            name: team,
            currentCost: cost,
            playersBought: counter
        }
    }
    return {
        getTeams: function (players) {
            var teams = [];
            angular.forEach(['Strikers', 'Hotshots'], function (value) {
                teams.push(getTeamInfo(value, players));
            });
            return teams;

        }
    }


});
