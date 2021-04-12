document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });

});

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        let symbol = board[position];
        symbol = (symbol == 'o') ? 'Escudo' : 'Espada';
        setTimeout(() => {
            alert("Game Over \nO vencedor foi " + symbol);
        }, 10);
    }
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;

    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.innerHTML = `<div></div>`;
    });


}
