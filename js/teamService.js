apl.factory('teamService', function (data) {
    var myTeams = ['Strikers', 'Hotshots', 'Phantoms', 'Beasts'];
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
            angular.forEach(myTeams, function (value) {
                var teamInfo = getTeamInfo(value, players);
                teams.push(teamInfo);
            });
            return teams;

        }
    }


});
