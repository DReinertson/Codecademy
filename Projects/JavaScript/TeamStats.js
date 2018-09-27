const team = {
  _players : [
    {firstName: 'Darryn',
     lastName: 'Reinertson',
     age: 28
    },
    {firstName: 'Zoe',
     lastName: 'Vrieling',
     age: 28    
    },
    {firstName: 'Link',
     lastName: 'theCorgi',
     age: 1
    }
  ],
  _games : [
    {opponent: 'team1',
    teamPoints: 24,
    opponentPoints: 12},
    {opponent: 'team2',
     teamPoints: 12,
     opponentPoints: 10    
    },
    {opponent:'team3',
     teamPoints: 4,
     opponentPoints: 12      
    }
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  
  addPlayer(firstName, lastName, age){
    let player = {firstName: firstName,
                  lastName: lastName,
                  age: age
                 }
    this._players.push(player);
  },
  addGame(opponentName, teamPoints, oppPoints){
    let game = {opponent: opponentName,
               teamPoints: teamPoints,
               opponentPoints: oppPoints};
    this._games.push(game);
  }
  
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
team.addGame('team4', 33, 21);
team.addGame('team5', 3, 21);
team.addGame('team6', 16, 9);
console.log(team.games);
