document.addEventListener("DOMContentLoaded", function () {
    createBoard(50);

})

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;    //creating the squares for each column from users input
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;       //creating the squares for each row from users input

    let numDivs = size * size;

    for( i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board.insertAdjacentElement("beforeend", div);
    }
}
