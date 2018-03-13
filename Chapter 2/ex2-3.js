// Define board and board size
let board = "";
let size = 8;

//Loop through the columns of the board
for (let j = 0; j < size; j++) {
    // Loop through the rows of the board
    for (let i = 0; i < size; i++) {
        if ((i+j) % 2 == 0) {
            board += " ";
        }
        else {
            board += "#";
        }
    }
    // Add new line after each line
    board += "\n";
}