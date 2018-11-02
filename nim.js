function renderNimLayout() {
    document.getElementById('main-content').innerHTML = `
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
                <div id="content" class="w-75 text-center pebble-container">
                </div>
            </div>
        </div>
    `;
}

var state = {}
function nimReset() {
    state.move = 0;
    state.taken = 0;
}

function renderNim() {
    var button = document.getElementById('updatePebbles');
    var content = document.getElementById('content');
    var reset = document.getElementById('reset');

    button.addEventListener('click', function () {
        state.move++;
        state.taken = document.getElementById('takeInput').value;
        nimFuncCalls();
    });

    reset.addEventListener('click', function () {
        nimReset();
        nimFuncCalls();
    });
    content.innerHTML = renderPebbles();
}

function nimFuncCalls() {
    var remaining = document.getElementById('remaining');
    remaining.innerHTML = 16 - state.move * 4;
    content.innerHTML = renderPebbles();
    content.innerHTML += lastPlay();
}

function lastPlay() {
    var html = "";
    if (state.move) {
        html += `<h3>You took ${state.taken} pebble(s) and the Computer took ${4 - state.taken} pebble(s).</h3>`;
    }
    if (state.move > 3) {
        state.move = 3;
        html += "<h1>Computer won! So sorry for you!</h1>";
    }
    return html;
}

function renderPebbles() {
    var html = "";
    for (var i = 0; i < state.move * 4; i++) {
        html += `<div class="pebble taken"></div>`
    }
    for (var i = 0; i < 16 - state.move * 4; i++) {
        html += `<div class="pebble"></div>`
    }
    return html;
}

var nimButton = document.getElementById('nim');
nimButton.addEventListener('click', function () {
    renderNimLayout()
    nimReset()
    renderNim();
});