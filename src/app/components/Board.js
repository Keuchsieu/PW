import React from 'react';
import Block from './Block';
import Options from './Options';
var boardStyle = {
  paddingTop: '102px',
  textAlign: 'center',
}
var titleStyle = {
  color: '#666666',
}

function Board(props){
  return(
  <div className="Board" style={boardStyle}>
    <h4 style={titleStyle}>Instructions</h4>
    <div>
    <Block color='a' id='b1'/><Block color='b' id='b2'/><Block color='a' id='b3'/>
    </div>
    <div>
    <Block color='b' id='b4' /><Block color='a' id='b5' /><Block color='b' id='b6' />
    </div>
    <div>
    <Block color='a' id='b7' /><Block color='b' id='b8' /><Block color='a' id='b9' />
    </div>
    <br></br>
    <Options />
  </div>);
}

export default Board;