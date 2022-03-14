//Creates a grid container and appends it to the body
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = 'repeat(16, 30px)';
gridContainer.style.gridTemplateRows = 'repeat(16, 30px)';
gridContainer.style.justifyContent = 'center';
document.body.appendChild(gridContainer);

//Creates 256 divs and appends them to the grid container
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.style.width = '29px';
    div.style.height = '29px';
    div.style.border = '1px solid black';
    gridContainer.appendChild(div);
}

//when hovering over a div, it changes color to random color
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    });
});


//adds a button to the bottom of the page to change the colors of grid items to random colors
const button = document.createElement('button');
button.addEventListener('click', () => {
    gridItems.forEach(item => {
        item.style.backgroundColor = 'white';
    });
});
button.innerText = 'Clear';
document.body.appendChild(button);