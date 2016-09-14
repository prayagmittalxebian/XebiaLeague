apl.factory('playerService', function (data) {
    return {
        getPlayers: function () {
            return data.getListOfPlayers();
        },
        isMale: function (player) {
            return player.gender == "Male";
        },
        getImage: function (player) {
            if (player.image) {
                return player.image;
            }
            else {
                return this.isMale(player) ? "images/team/sachin.jpg" : "images/team/mitaliRaj.jpg";
            }
        },

        getCaptains: function (players) {
            var captains = _.filter(players, function (player) {
                return player.captain == true;
            });
            var teamCaptains = [];
            captains.forEach(function (captain) {
                teamCaptains.push({team: captain.team, captain: captain});

            })
            return teamCaptains;
        }

    }
});
