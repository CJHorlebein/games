function renderNimLayout(){
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



function renderNimPebbles(taken) {
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

function renderNimLayout(){

    var button = document.getElementById('updatePebbles');
    var reset = document.getElementById('reset');
    var remaining = document.getElementById('remaining');
    var move = 0;

    button.addEventListener('click', function () {
        move++;
        var taken = document.getElementById('takeInput').value;
        content.innerHTML = renderNimPebbles(taken);
        remaining.innerHTML = 16 - move * 4;
    });

    reset.addEventListener('click', function () {
        playNim();
    });
    content.innerHTML = renderNim(0);
}


var nimButton = document.getElementById('nim');
nimButton.addEventListener('click', function(){
    renderNimLayout();
    playNim
});

