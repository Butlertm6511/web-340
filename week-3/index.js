'us strict'

const {getTeams, getTeam, displayTeam} = require('./team-manager')

const displayAllTeams = getTeams();
console.log('--DISPLAY TEAM--');
for(const team of displayAllTeams){
    console.log(displayTeam(team));
}

const teamName1 = 'Atlanta Falcons';
const team1 = getTeam(teamName1);
console.log('\n--DISPLAY A SINGLE TEAM--');
console.log(displayTeam(team1));

const teamName2 = 'Dallas Cowboys';
const team2= getTeam(teamName2);
console.log('\n--DISPLAY A SINGLE TEAM--');
