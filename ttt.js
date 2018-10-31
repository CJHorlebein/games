var playTtt = function (){
    var mainContent = document.getElementById('main-content');
    var html = `
        <h1 class="text-center mb-0">Tic Tac Toe</h1>
        <div class="container d-flex flex-column justify-content-center align-items-center">
            <h4>It's Your turn!</h4>
            <div class="w-25 text-center d-flex flex-wrap mx-auto justify-content-around">
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

var tttButton = document.getElementById('ttt');
tttButton.addEventListener('click', playTtt);