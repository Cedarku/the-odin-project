const grid = document.querySelector(".grid");
const btnSize = document.querySelector(".btnSize");

btnSize.addEventListener("click", () => {
    createGrid(getSize())}
);

function getSize() {
    let size;
    do {
        size = Number(prompt("Enter the number of squares per side (1-100):"));
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

        square.addEventListener("mouseenter", () => {
        square.style.backgroundColor= "black";}
    );
}
}

createGrid(16);