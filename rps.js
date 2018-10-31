function renderRpsLayout(){
    document.getElementById('main-content').innerHTML = `
        <h1 class="text-center mb-0">Rock, Paper, Scissors</h1>
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="w-75 text-center">
                <button id="rock" class="btn btn-primary my-1">Rock</button>
                <button id="paper" class="btn btn-primary my-1">Paper</button>
                <button id="scissors" class="btn btn-primary my-1">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
                <div class="m-4">You played: <b id="player">Nothing yet!</b></div>
                <div class="m-4">The computer played: <b id="computer">Nothing yet!</b></div>
            </div>
            <h1 id="outcome" class="text-center">Rock, Paper, Scissors, SHOOT!</h1>
        </div>
    `;
}


var plays = ['Rock', 'Paper', 'Scissors'];

function rpsCheck(p1, p2) {
    if(p1 == p2){ // checks for a draw first
        return 'Draw';
    } else if (p1 == 'Rock') {
        return p2 == 'Scissors' ? 1 : 2;
    } else if (p1 == 'Scissors'){
        return p2 == 'Paper' ? 1 : 2;
    } else if (p1 == 'Paper'){
        return p2 == 'Rock' ? 1 : 2;
    }
};

function renderRps(userPlay){
    var outcome = document.getElementById('outcome');
    var compPlay = plays[Math.floor(Math.random() * 3)];
    var results = rpsCheck(userPlay, compPlay);
    player.innerHTML = userPlay;
    computer.innerHTML = compPlay;
    outcome.innerHTML = results == 'Draw' ? "it's a draw!" : `Player ${results} wins!`;        
}

function playRps(){
    rock = document.getElementById('rock');
    rock.addEventListener('click', function(){
        renderRps('Rock')
    });
    paper = document.getElementById('paper');
    paper.addEventListener('click', function(){
        renderRps('Paper')
    });
    scissors = document.getElementById('scissors');
    scissors.addEventListener('click', function(){
        renderRps('Scissors')
    });
}

// runs each game on click
var rpsButton = document.getElementById('rps');
rpsButton.addEventListener('click', function(){
    renderRpsLayout();
    playRps();
});
