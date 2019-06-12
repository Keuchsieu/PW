class Sudoku{
  constructor(board){
    this.board = board;
    this.solution = [];
  };
  complete(board){
    for(var i=0;i<9;i++){
      for(var j=0;j<9;j++){
        if(board[i][j]=='.'){
          return false;
        }
      }
    }
    return true;
  };
  isValid(board){
    var i;
    var j;
    var con;
    var tmp;
    var rst = true;
    // check each row
    for(i=0;i<9;i++){
        con = [];
        for(j=0;j<9;j++){
            tmp = board[i][j];
            if(tmp != '.'){
                con.forEach(ele => {
                    if(ele==tmp) rst = false;
                });
                con.push(tmp);
            }
        }
    }
    if(!rst){
        return false;
    }
    // check cols
    for(i=0;i<9;i++){
        con = [];
        for(j=0;j<9;j++){
            tmp = board[j][i];
            if(tmp != '.'){
                con.forEach(ele => {
                    if(ele==tmp) rst = false;
                });
                con.push(tmp);
            }
        }
    }
    if(!rst){
        return false;
    }
    // check blocks
    var blocks = [
        [0,0],[0,3],[0,6],[3,0],[3,3],[3,6],[6,0],[6,3],[6,6]
    ];
    blocks.forEach(b=>{
        con = [];
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                tmp = board[b[0]+i][b[1]+j];
                if(tmp != '.'){
                    con.forEach(ele => {
                        if(ele==tmp) rst = false;
                    });
                    con.push(tmp);
                };
            }
        }
    });
    return rst;
  };
  possibles(board, row, col){
    var i,j;
    var possible = ['1','2','3','4','5','6','7','8','9'];
    var blocks = [[0,0],[0,3],[0,6],[3,0],[3,3],[3,6],[6,0],[6,3],[6,6]];
    var whichb = -1;
    // block
    for(i=0;i<9;i++){
      if(row>=blocks[i][0]&&row<(blocks[i][0]+3) && col>=blocks[i][1] && col<(blocks[i][1]+3)){
        whichb = i; // finds which block does this one falls in.
      }
    }
    if(whichb == -1) return false; // not fall in the right range
    for(i=0;i<3;i++){
      for(j=0;j<3;j++){
        for(var k=0;k<possible.length;k++){
          // blocks[which] finds the top left square, 0 element for row, 1 element for col
          // row + i, col + j for the entire 9 numbers in this block
          if(possible[k]==board[blocks[whichb][0]+i][blocks[whichb][1]+j]){
            possible.splice(k,1);
            k--;
          }
        }
      }
    }
    // column
    for(i=0;i<9;i++){
      for(j=0;j<possible.length;j++){
        if(possible[j] == board[i][col]){ // check each column
          possible.splice(j,1); // remove this element if it is on same column
          j--;
        }
      }
    }
    // row
    for(i=0;i<9;i++){
      for(j=0;j<possible.length;j++){
        if(possible[j]==board[row][i]){ // check each row
          possible.splice(j,1);
          j--;
        }
      }
    }
    
    return possible;
  };
  sudokuSolver(board){
    var i,j;
    var choices;
    if(this.complete(board)){
      this.solution = board;
      return true;
    } else {
      var found = false;
      for(var x=0;x<9;x++){
        for(var y=0;y<9;y++){
          if(board[x][y]=='.'){ // this place is empty
            found = true;
            i=x;
            j=y;
            break; // breaks y loop
          }
        }
        if(found) break; // breaks x loop for empty place found
      }
      choices = this.possibles(board, i, j);
      for(var k=0;k<choices.length;k++){
        board[i][j] = choices[k];
        if(this.sudokuSolver(board)){
          return true;
        }
      }
      board[i][j] = '.'; // not found
      return false;
    }
  };
  solve(){
    if(this.isValid(this.board)){
      this.sudokuSolver(this.board);
      if(this.solution != []){
        return this.solution;
      }
    } else {
      return false;
    }
  }
}


module.exports = Sudoku;