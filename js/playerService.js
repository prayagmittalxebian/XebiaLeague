apl.factory('playerService', function(data){
  function addPlayerToTeam(player, team){
    player.team = team;

    localStorage.setItem('players', JSON.stringify(data.listOfPlayers));
  }

  function pickRandomPlayer(){

  }


});