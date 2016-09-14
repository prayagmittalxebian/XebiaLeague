apl.factory('teamService', function (data, playerService) {
    var myTeams = [{name: "Super Giants", captain: "", image: "superGiants"},
        {
            name: "The Beasts",
            captain: "",
            image: "theBeasts"
        }, {name: "Team Raiders", captain: "", image: "teamRiders"},
        {name: "Eleven Ducks", captain: "", image: "elevenDucks"}];


    getTeamInfo = function (team, players) {
        var teamCaptains = playerService.getCaptains(players);
        var cost = 0, counter = 0, malePlayers = 0;
        var captain = _.find(teamCaptains, function (player) {
            if (player.team == team.name) return player.captain;
        });
        for (var i = 0; i < players.length; i++) {
            if (players[i].team == team.name) {
                cost += parseInt(players[i].cost, 10);
                if (playerService.isMale(players[i])) {
                    malePlayers++;
                }
                counter++;
            }
        }
        return {
            name: team.name,
            currentCost: cost,
            playersBought: counter,
            malePlayers: malePlayers,
            captain: captain,
            image: team.image
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
