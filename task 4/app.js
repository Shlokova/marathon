const board = document.getElementById('board');
const COLOR_ARRAY = [
    'rgb(33 163 169)',
    'rgb(76 149 132)',
    'rgb(62 135 119)',
    'rgb(84 165 91)',
    'rgb(122 199 181)',
    'rgb(64 145 85)',
    'rgb(18 116 89)',
];

function boardSources(squaresCount) {
    for (let i = 0; i < squaresCount; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => setColor(square));
        square.addEventListener('mouseleave', () => removeColor(square));
        board.append(square);
    }
}

function setColor(elem) {
    const color = getColor();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`;
}

function removeColor(elem) {
    elem.style.backgroundColor = null;
    elem.style.boxShadow = null;
}

function getColor() {
    const index = Math.floor(Math.random() * COLOR_ARRAY.length);
    return COLOR_ARRAY[index];
}

boardSources(722);
