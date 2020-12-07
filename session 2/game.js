console.log('Welcome to our first game')

// team => name , score, id
// teams  => count  => [team]
// get 2 items => 2 prompt => single data (msg)
// check team name
// get max score
// get min score
// get avg scores
// let teams = JSON.parse(localStorage.getItem('teams')) || [];
//localStorage.setItem('check',JSON.stringify([{name:'a'}]))

//let x = JSON.parse(localStorage.getItem('check'))
// if(localStorage.getItem('teams')) teams = JSON.parse(localStorage.getItem('teams'))
// else teams = []
let teams = JSON.parse(localStorage.getItem('teams')) || [];

let getData = function(msg){
    return prompt(msg)
}

let insertTeam=function(){
    team = {
        teamName: getData('enter team name'),
        teamScore: getData('enter team score')
    }
    teams.push(team)
    localStorage.setItem('teams', JSON.stringify(teams))
}

let getWinner = function(){
    let max = teams[0].teamScore; let index = 0
    teams.forEach((team, i) => {
        if(max<team.teamScore) {
            max = team.teamScore
            index = i
        }
    });
    return index
}

while(true){
    ch = prompt('enter your choice')
    if(ch=='3') break

    switch(ch){
        case '1': insertTeam();break;
        case '2': console.log(getWinner());break;
        default: console.log('invalid data')
    }

}