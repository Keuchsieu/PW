import React from 'react';
import Number from './Number';

var buttonStyle={
  display: 'inline-block'
};

function Options(props){
  var clear = function(){
    console.log('clears');
    var sqrs = document.getElementsByClassName("Square");
    for(let i = 0; i<sqrs.length;i++){
      sqrs.p = "";
    }
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
        <Number num={1} />
        <Number num={2} />
        <Number num={3} />
        <Number num={4} />
        <Number num={5} />
        <Number num={6} />
        <Number num={7} />
        <Number num={8} />
        <Number num={9} />
      </h6>
      <br></br>
      <div>
        <button id="clear" onClick={clear} style={buttonStyle}>Clear</button>
        <button id="solve" onClick={solver} style={buttonStyle}>Solve</button>
      </div>
    </div>
  )
}

export default Options;