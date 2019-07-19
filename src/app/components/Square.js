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
    setSelection(props.id);
    console.log("Selection made at " + props.id);
  }

  function setSelection(id){
    var prev = document.getElementsByClassName("selected_square");
    // cleanup previous selection
    for(let i=0;i<prev.length;i++){
      prev[i].className = "Square";
    }
    // set new selection
    var newone = document.getElementById(id);
    newone.className="Square selected_square";
  }

  return(
  <div className="Square" id={props.id} style={squareStyle} onClick={selectSquare}>
    {/* <button style={inputStyle}></button> */}
    <p></p>
  </div>);
}

export default Square;