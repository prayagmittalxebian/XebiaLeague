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
        }

    }
});
