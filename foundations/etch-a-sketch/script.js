const grid = document.querySelector(".grid");
const btnSize = document.querySelector(".btnSize");
const modal = document.querySelector('#grid-modal');
const gridForm = document.querySelector('#grid-form');
const cancelBtn = document.querySelector('#cancel-btn');
const sizeInput = document.querySelector('#grid-size-input'); 

btnSize.addEventListener("click", () => {
    sizeInput.value = "";
    modal.showModal();
});

cancelBtn.addEventListener("click", () => {
    modal.close();
});

gridForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const size = Number(sizeInput.value);
    if (!Number.isInteger(size) || size < 1 || size > 100) {
        alert("Please enter a whole number between 1 and 100.");
        return;
    }

    createGrid(size);
    modal.close();
});

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

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

let rainbowMode = false;
const rainbowSwitch = document.querySelector("#rainbow-toggle");
const rainbowTooltip = document.querySelector('#rainbow-tooltip');
const rainbowWrapper = document.querySelector('.rainbow-wrapper');
let tooltipTimer;

function showRainbowTooltip() {
    rainbowTooltip.classList.add('show');
    clearTimeout(tooltipTimer);
    tooltipTimer = setTimeout(() => {
        rainbowTooltip.classList.remove('show');
    }, 2500);
}

rainbowSwitch.addEventListener("change", () => {
    rainbowMode = rainbowSwitch.checked;

    if (rainbowMode) {
        showRainbowTooltip();
    } else {
        rainbowTooltip.classList.remove('show');
        clearTimeout(tooltipTimer);
    }
});

rainbowWrapper.addEventListener('mouseenter', () => {
    if (rainbowMode) {
        rainbowTooltip.classList.add('show');
    }
});

rainbowWrapper.addEventListener('mouseleave', () => {
    if (rainbowMode) {
        rainbowTooltip.classList.remove('show');
        clearTimeout(tooltipTimer);
    }
});

createGrid(16);