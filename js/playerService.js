apl.factory('playerService', function(data){
    return {
        getPlayers: function () {
            return data.getListOfPlayers();
        }
  }
});
