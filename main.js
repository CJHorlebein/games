var playNim = function(){
    // identifying content in page
    var mainContent = document.getElementById('main-content');

    // Setting game board
    var html = `
        <h1 class="text-center mb-0">NIM</h1>
        <div>
            <div class="container d-flex flex-column justify-content-start align-items-center">
                <h4 class="mt-1">It's player 1's turn! How many pebbles will you take?</h4>
                <div>
                    <select id="takeInput" class="my-2">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button id="updatePebbles" class="btn btn-success">Take</button>
                    <button id="reset" class="btn btn-primary">Start over</button>
                </div>
                <h4>There are <span id="remaining">16</span> pebbles left</h4>
                <div id="content" class="w-50 text-center pebble-container">
                </div>
            </div>
        </div>
    `;
    mainContent.innerHTML = html;

    var button = document.getElementById('updatePebbles');
    var reset = document.getElementById('reset');
    var remaining = document.getElementById('remaining');
    var move = 0;

    button.addEventListener('click', function () {
        move++;
        var taken = document.getElementById('takeInput').value;
        content.innerHTML = renderNim(taken);
        remaining.innerHTML = 16 - move * 4;
    });

    reset.addEventListener('click', function () {
        playNim();
    });

    function renderNim(taken) {
        // Change this render function to use the "game" parameter
        html = "";
        if (move) {
            html += `<h3>You took ${taken} pebble(s) and the Computer took ${4 - taken} pebble(s).</h3>`;

            if (move > 3) {
                move = 4;
                html += "<h1>Computer won! So sorry for you!</h1>";
                return html;
            }
        }

        for (var i = 0; i < move * 4; i++) {
            html += `<div class="pebble taken"></div>`
        }
        for (var i = 0; i < 16 - move * 4; i++) {
            html += `<div class="pebble"></div>`
        }
        return html;
    }
    content.innerHTML = renderNim(0);
}

var playRps = function (){
    var mainContent = document.getElementById('main-content');
    var html = `
        <h1 class="text-center mb-0">Rock, Paper, Scissors</h1>
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="w-50 text-center">
                <button id="rock" class="btn btn-primary">Rock</button>
                <button id="paper" class="btn btn-primary">Paper</button>
                <button id="scissors" class="btn btn-primary">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
                <div class="m-5">You played: <b id="player">Nothing yet!</b></div>
                <div class="m-5">The computer played: <b id="computer">Nothing yet!</b></div>
            </div>
            <h1 id="outcome" class="text-center">Rock, Paper, Scissors, SHOOT!</h1>
        </div>
    `;
    mainContent.innerHTML = html;

    function runGame(p1, p2) {
        // Change this render function to use the "game" parameter
        if(p1 == p2){ // checks for a draw first
            return 'Draw';
        }
        // Compares each possible opportunity of the game
        else if (p1 == 'Rock') {
            return (p1 == 'Rock' && p2 == 'Scissors') ? 1 : 2;
        }
        else if (p1 == 'Scissors'){
            return (p1 == 'Scissors' && p2 == 'Paper') ? 1 : 2;
        }
        else if (p1 == 'Paper'){
            return (p1 == 'Paper' && p2 == 'Rock') ? 1 : 2;
        }
    };

    var outcome = document.getElementById('outcome');
    var plays = ['Rock', 'Paper', 'Scissors'];
    function renderRps(userPlay){
        var compPlay = plays[Math.floor(Math.random() * 3)];
        var results = runGame(userPlay, compPlay);
        player.innerHTML = userPlay;
        computer.innerHTML = compPlay;
        outcome.innerHTML = results == 'Draw' ? "it's a draw!" : `Player ${results} wins!`;        
    }

    rock = document.getElementById('rock');
    rock.addEventListener('click', function(){renderRps('Rock')});
    paper = document.getElementById('paper');
    paper.addEventListener('click', function(){renderRps('Paper')});
    scissors = document.getElementById('scissors');
    scissors.addEventListener('click', function(){renderRps('Scissors')});
}


var playTtt = function (){
    var mainContent = document.getElementById('main-content');
    var html = `
        <h1 class="text-center mb-0">Tic Tac Toe</h1>
        <div class="container d-flex flex-column justify-content-center align-items-center">
            <h4>It's Your turn!</h4>
            <div class="w-50 text-center d-flex flex-wrap mx-auto justify-content-around">
                <button class="ttt-btn w-25 m-2"> </button>
                <button class="ttt-btn w-25 m-2"> </button>
                <button class="ttt-btn w-25 m-2"> </button>
                <button class="ttt-btn w-25 m-2"> </button>
                <button class="ttt-btn w-25 m-2"> </button>
                <button class="ttt-btn w-25 m-2"> </button>
                <button class="ttt-btn w-25 m-2"> </button>
                <button class="ttt-btn w-25 m-2"> </button>
                <button class="ttt-btn w-25 m-2"> </button>
            </div>
        </div>
    `
    mainContent.innerHTML = html;
    
    tttButtons = Array.from(document.getElementsByClassName('ttt-btn'));
    tttButtons.forEach(position =>{
        position.addEventListener('click', function(){
            position.innerHTML = "X";
            console.log(this);
        });
    });
    function renderTtt(game) {
        // Change this render function to use the "game" parameter
    
    }
}

// runs each game on click
var rpsButton = document.getElementById('rps');
rpsButton.addEventListener('click', playRps);
var nimButton = document.getElementById('nim');
nimButton.addEventListener('click', playNim);
var tttButton = document.getElementById('ttt');
tttButton.addEventListener('click', playTtt);


