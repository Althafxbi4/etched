document.addEventListener('DOMContentLoaded',
function() {createGrid(16)})
    const althafDiv = document.getElementById('althaf')
    althafDiv.addEventListener('mouseover', althafADiv)
function createGrid(gridSize) {
    for (i = 0; i < Math.pow(gridSize,2); i++) {
    let gridDiv = document.createElement('div')
    document.getElementById('althaf').appendChild(gridDiv)}}
function althafADiv(e) {
    if (e.target == althafDiv) { return }
    e.target.classList.add('althafed')}
function reset() {
    while (althafDiv.firstChild) {
    althafDiv.removeChild(althafDiv.firstChild)   }
    let numSquares = prompt('Type 1 to 100?')
    althafDiv.style.gridTemplateColumns = 'repeat(' + numSquares + ', 1fr)'
    althafDiv.style.gridTemplateRows = 'repeat(' + numSquares + ', 1fr)'
    createGrid(numSquares)
}

