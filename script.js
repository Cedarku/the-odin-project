const grid = document.querySelector(".grid");
const btnSize = document.querySelector(".btnSize");

// Button function
btnSize.addEventListener("click", () => {
    let size = getSize();
    createGrid(size)}
);

// Get size
function getSize() {
    return prompt("Enter the number of squares per side (max 100):");
}

function createGrid(size) {
    grid.innerHTML = "";
    let numSquares = size * size;

    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);

        square.addEventListener("mouseenter", () => {
        square.style.backgroundColor= "black";}
    );
}
}

createGrid(16);

/*
// Create the grid
for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);

    square.addEventListener("mouseenter", () => {
    square.style.backgroundColor= "black";}
    );
}
*/