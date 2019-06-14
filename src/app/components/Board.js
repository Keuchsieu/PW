import React from 'react';
import Block from './Block';
var boardStyle = {
  paddingTop: '102px',
  textAlign: 'center'
}
var titleStyle = {
  color: '#666666'
}
function Board(props){
  return(
  <div className="Board" style={boardStyle}>
    <h4 style={titleStyle}>Sudoku Solver</h4>
    <div>
    <Block color='a'/><Block color='b'/><Block color='a'/>
    </div>
    <div>
    <Block color='b'/><Block color='a' /><Block color='b' />
    </div>
    <div>
    <Block color='a' /><Block color='b' /><Block color='a' />
    </div>
  </div>);
}

export default Board;