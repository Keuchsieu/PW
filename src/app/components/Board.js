import React from 'react';
import Block from './Block';
var boardStyle = {
  paddingTop: '102px',
  textAlign: 'center',
}
var titleStyle = {
  color: '#666666',
}
var optionStyle = {
  display: 'inline-block',
}
function Board(props){
  var clear = function(){
    console.log('clears');
    // clear out 81 numbers
  }
  var solver = function(){
    // get 81 numbers
    // send to API
    // receive respond
    // assign to buttons
    console.log("solves");
  }
  return(
  <div className="Board" style={boardStyle}>
    <h4 style={titleStyle}>Instructions</h4>
    <div>
    <Block color='a'/><Block color='b'/><Block color='a'/>
    </div>
    <div>
    <Block color='b'/><Block color='a' /><Block color='b' />
    </div>
    <div>
    <Block color='a' /><Block color='b' /><Block color='a' />
    </div>
    <br></br>
    <h6>
      <button style={optionStyle}>1</button>
      <button style={optionStyle}>2</button>
      <button style={optionStyle}>3</button>
      <button style={optionStyle}>4</button>
      <button style={optionStyle}>5</button>
      <button style={optionStyle}>6</button>
      <button style={optionStyle}>7</button>
      <button style={optionStyle}>8</button>
      <button style={optionStyle}>9</button>
    </h6>
    <br></br>
    <div>
      <button id="clear" onClick={clear} style={optionStyle}>Clear</button>
      <button id="solve" onClick={solver} style={optionStyle}>Solve</button>
    </div>
  </div>);
}

export default Board;