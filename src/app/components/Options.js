import React from 'react';

var optionStyle = {
  display: 'inline-block',
}

function Options(props){
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
    <div className="Options">
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
    </div>
  )
}

export default Options;