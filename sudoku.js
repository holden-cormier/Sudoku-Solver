//global variable
//accesible to all functions
var sol =
    [[0, 7, 0, 2, 3, 8, 0, 0, 0],
    [0, 0, 0, 7, 4, 0, 8, 0, 9],
    [0, 6, 8, 1, 0, 9, 0, 0, 2],
    [0, 3, 5, 4, 0, 0, 0, 0, 8],
    [6, 0, 7, 8, 0, 2, 5, 0, 1],
    [8, 0, 0, 0, 0, 5, 7, 6, 0],
    [2, 0, 0, 6, 0, 3, 1, 9, 0],
    [7, 0, 9, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 9, 7, 4, 0, 8, 0]];
//this function prints the board
var printBoard = function () {
    //print board
    //this is here to help you understand how the code works.
    //you should remove it when you write your own code.
    // LOADS PREINPUTED SUDOKU BOARD
    for(var row = 1;row!=10;row++){
        for(var col = 1;col!=10;col++){
            var temp = document.getElementById('r' + row + col);
            temp.innerHTML = sol[row-1][col-1];
        }
    }
};





var isValid = function(row, col, val) {
    testRow = false;
    testCol = false;
    testBox = false;
    //TESTS ROW
    for(r = 0; r!=9;r++){
        if(sol[row][r] == val){
            testRow =true;
        }
    }
    //TESTS COL
    for(c = 0; c!=9;c++){
        if(sol[c][col] == val){
            testCol =true;
        }
    }
    //TESTS BOX
    for(b = 0; b!=9;b++){
        const rBox = 3 * Math.floor(row / 3) + Math.floor(b/ 3);
        const cBox = 3 * Math.floor(col / 3) + b % 3;
        if (sol[rBox][cBox] == val) {
            testBox = true;
        }
    }
    if(testRow == true || testCol == true || testBox == true ){
        return false;
    }
    return true;
}


var solve = function(){
    printBoard();
    for (let row = 0; row != 9; row++) {
        for (let col = 0; col != 9; col++) {
            if (sol[row][col] == 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(row, col, num)) {
                        sol[row][col] = num;
                        if (solve()) {
                        return true;
                    } 
                    else {
                        sol[row][col] = 0;
                    }
                  }
                }
            return false;
            }
        }
    }
 return true;
};
printBoard();