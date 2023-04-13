'use strict';

const Team = require('./team').Team;

const teams = [
    new Team('Atlanta Falcons', 'Freddie Falcon', 42),
    new Team('Kansas City Chiefs', 'K.C. Wolf', 63),
    new Team('Las Vegas Raiders', 'Raider Rusher', 44),
    new Team('Dallas Cowboys', 'Rowdy', 53),
    new Team('Pittsburgh Steelers', 'Steely McBeam', 50),
];

function getTeams (){
    return teams;
}

function getTeam(name){
    return teams.find(team => team.name === name);
}

function displayTeam(team){
    return(
        'name:' + team.name + '\n' +
        'mascot:' + team.mascot + '\n' +
        'playerCount:' + team.playerCount + '\n'
    );
}

module.exports.getTeams = getTeams;
module.exports.getTeam = getTeam;
module.exports.displayTeam = displayTeam;
