const grid = document.querySelector(".grid");
const btnSize = document.querySelector(".btnSize");

btnSize.addEventListener("click", () => {
    const size = getSize();
    if (size === null) {
        return;
    }
    createGrid(size);
});

function getSize() {
    let input;
    let size;
    do {
        input = prompt("Enter the number of squares per side (1-100):");
        if (input === null) {
            return null;
        }
        size = Number(input);
        if (!Number.isInteger(size) || size < 1 || size > 100) {
            alert("Please enter a whole number between 1 and 100.");
        }
    } while (!Number.isInteger(size) || size < 1 || size > 100);
    return size;
}

function createGrid(size) {
    grid.innerHTML = "";
    let numSquares = size * size;

    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        const squareSize = 480 / size;
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        grid.appendChild(square);

        square.addEventListener("mouseenter", paintSquare);
    }
}

function paintSquare(event) {
    const square = event.target;
    if (rainbowMode) {
        square.style.backgroundColor = getRandomColor();
    } else {
        square.style.backgroundColor = "black";
    }
}

let rainbowMode = false;
const rainbowSwitch = document.querySelector("#rainbowMode");
rainbowSwitch.addEventListener("change", () => {
    rainbowMode = rainbowSwitch.checked;
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


createGrid(16);