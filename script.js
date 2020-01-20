let container = document.querySelector('#container');
let cellNum = 10; //Default grid size
let brushColor = ''

//Creates grid



function createGrid(cellNum) {
    container.style.gridTemplateRows = `repeat(${cellNum}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${cellNum}, 1fr)`;

    for (i = 1; i <= cellNum ** 2; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell')
        container.appendChild(cell);
        // add event listeners (once)
        cell.addEventListener("mouseenter", function () {
            // cell.style.backgroundColor = brushUsedForPainting
            let brush = '';
            if (brushColor == 'greyShades') {
                brush = getShadesOfGrey(cell);
            } else if (brushColor == 'randomColor') {
                brush = getRandomColor();
            } else {
                brush = brushColor;
            }
            cell.style.backgroundColor = brush;
        })
    }
}

createGrid(cellNum);
paintRandom();

//Asks for new size grid

function newSize() {
    cellNum = prompt('What size grid would you like? Enter a number between 3 - 30.');
    checkCellNum();
    resetGrid();
    createGrid(cellNum);
}

//Resets grid size and colour

function resetGrid() {
    allCells = document.querySelectorAll('.cell');
    allCells.forEach(allMyCells => {
        container.removeChild(allMyCells);
    })
}

//Makes sure grid is 3 - 30 cells

function checkCellNum() {
    if (cellNum < 3 || cellNum > 30) {
        newSize();
    } else {
        return;
    }
}

checkCellNum();


//Change colour by button

function paintBlue() {
    brushColor = 'lightblue'
}

function paintPink() {
    brushColor = 'pink'
}

function paintRandom() {
    brushColor = 'randomColor'
}

function paintGreyShades() {
    brushColor = 'greyShades'
}

//Generate random color

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Generate darkening grey

function getShadesOfGrey(cell) {

    if (cell.style.backgroundColor == 'rgb(245, 245, 245)') {
        return 'rgb(238, 238, 238)';
    } else if (cell.style.backgroundColor == 'rgb(238, 238, 238)') {
        return 'rgb(224, 224, 224)';
    } else if (cell.style.backgroundColor == 'rgb(224, 224, 224)') {
        return 'rgb(189, 189, 189)';
    } else if (cell.style.backgroundColor == 'rgb(189, 189, 189)') {
        return 'rgb(158, 158, 158)'
    } else if (cell.style.backgroundColor == 'rgb(158, 158, 158)') {
        return 'rgb(117, 117, 117)';
    } else if (cell.style.backgroundColor == 'rgb(117, 117, 117)') {
        return 'rgb(97, 97, 97)'
    } else if (cell.style.backgroundColor == 'rgb(97, 97, 97)') {
        return 'rgb(66, 66, 66)'
    } else if (cell.style.backgroundColor == 'rgb(66, 66, 66)') {
        return 'rgb(33, 33, 33)'
    } else if (cell.style.backgroundColor == 'rgb(33, 33, 33)') {
        return 'rgb(0, 0, 0)'
    } else if (cell.style.backgroundColor == 'rgb(0, 0, 0)') {
        return 'rgb(0, 0, 0)'
    } else {
        return 'rgb(245, 245, 245)'
    }
}


