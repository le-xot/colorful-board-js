const board = document.querySelector('#board')
const colors = ['red', 'blue', 'green', 'yellow']
const SQUARES_NUMBER = 256

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(e) {
  const color = `#${Math.floor(Math.random()*16777215).toString(16)}`
  e.style.backgroundColor = color
  e.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
}

function removeColor(e) {
  e.style.backgroundColor = '#1d1d1d'
  e.style.boxShadow = `0 0 2px #000`
}