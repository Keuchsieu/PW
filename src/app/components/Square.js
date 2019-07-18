import React from 'react';

var squareStyle={
  display: 'inline-block',
  borderColor: 'grey',
  height: '100%',
  width: '33.3333%',
  border: '1px solid',
  borderCollapse: 'collapse'
};
var inputStyle={
  height: '100%',
  width: '100%',
  backgroundColor: 'transparent'
}

function Square(props){
  function selectSquare(){
    console.log("function called " + props.id);
  }

  return(
  <div className="Square" id={props.id} style={squareStyle} onClick={selectSquare}>
    {/* <button style={inputStyle}></button> */}
  </div>);
}

export default Square;