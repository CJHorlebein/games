function renderTttLayout() {
    document.getElementById('main-content').innerHTML = `
        <h1 class="text-center mb-0">Tic Tac Toe</h1>
        <div class="container d-flex flex-column justify-content-center">
            <h4>It's Your turn!</h4>
            <div id="gameArea">
            </div>
        </div>
    `
    renderTttGame(3);
}
var currGame;
function resetTtt() {
    currGame = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
}

function renderTttGame(size) {
    var tttBoard = "";
    for (var i = 0; i < size; i++) {
        tttBoard += `<div class="w-25 text-center d-flex mx-auto justify-content-between">`
        for (var j = 0; j < size; j++) {
            tttBoard += `<button id="${'' + i + j}" class="ttt-btn w-25 m-2">${currGame[i][j]}</button>`
        }
        tttBoard += `</div>`
    }
    document.getElementById('gameArea').innerHTML = tttBoard;
}

var playTtt = function () {
    tttButtons = Array.from(document.getElementsByClassName('ttt-btn'));
    tttButtons.forEach(position => {
        position.addEventListener('click', function () {
            currGame[0][0] = "X";
            console.log(this.id);
        });
    });
    renderTttGame(3);
    console.log(currGame);
}
var tttButton = document.getElementById('ttt');
tttButton.addEventListener('click', function () {
    resetTtt();
    renderTttLayout();
    playTtt();
});