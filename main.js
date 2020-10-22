//Define conext and canvas
const canvas = document.getElementById('board');
const context = canvas.getContext('2d');

//Responsive UI Scaling
context.canvas.height = COL * BLOCK_SIZE;
context.canvas.width = ROW * BLOCK_SIZE;

context.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();

function play(){
    board.reset();
    console.table(board.grid);
}