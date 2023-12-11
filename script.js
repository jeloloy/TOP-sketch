const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');


function createGrid(size){
    container.innerHTML = '';
    container.style.width = `${size * 32}px`;

    for(let i = 0; i < size * size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
    
    addHoverEffect();
}

function addHoverEffect() {
  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'gray';
    });
  });
}

resetButton.addEventListener('click', () => {
  let newSize = prompt('Enter the number of squares per side (max 100):');
  
  newSize = parseInt(newSize);

  if (isNaN(newSize) || newSize <= 0) {
    alert('Please enter a valid number greater than 0.');
    return;
  }

  newSize = Math.min(newSize, 100);
  createGrid(newSize);
});

// Initial grid creation
createGrid(16);










































