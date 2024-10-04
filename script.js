let color = 'black';

document.addEventListener("DOMContentLoaded", function () {
    createBoard(16);

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function() {
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;    //creating the squares for each column from users input
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;       //creating the squares for each row from users input

    let numDivs = size * size;

    for( i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}


function getSize() {
    let input = prompt("What size board would you like?");
    let message = document.querySelector("#message");
    if(input == "") {
        message.innerHTML = "Please provide a number.";
    }else if(input < 1 || input > 100) {
        message.innerHTML = "Please input a number between 1 and 100.";
    }else {
        message.innerHTML = "Now lets play!";
        return input;    //returns the user input so that it changes the size of the squares
    }
}

function colorDiv(){
    if(color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }else {
        this.style.backgroundColor = 'black'
    }
}

function setColor(colorChoice) {
     color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}