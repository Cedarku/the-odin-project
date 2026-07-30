const grid = document.querySelector(".grid");
const btnSize = document.querySelector(".btnSize");
const btnClear = document.querySelector("#btn-clear");
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

btnClear.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = ""; 
    });
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
const rainbowText = document.querySelector('#rainbow-text');
let textTimer;
let hideTimer;

function hideRainbowText() {
    rainbowText.classList.remove('show');
    rainbowText.classList.add('hide');
    
    clearTimeout(hideTimer);

    hideTimer = setTimeout(() => {
        rainbowText.classList.remove('hide');
    }, 300);
}

function showRainbowText() {
    rainbowText.classList.remove('hide');

    void rainbowText.offsetWidth; 
    
    rainbowText.classList.add('show');
    clearTimeout(textTimer);
    
    textTimer = setTimeout(() => {
        hideRainbowText();
    }, 2000); 
}

rainbowSwitch.addEventListener("change", () => {
    rainbowMode = rainbowSwitch.checked;
    if (rainbowMode) {
        showRainbowText();
    } else {
        hideRainbowText();
        clearTimeout(textTimer);
    }
});

createGrid(16);