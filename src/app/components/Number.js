import React from 'react';

var optionStyle = {
  display: 'inline-block',
}

function Number(props){
  function setNumber(){
    console.log("set "+props.num);
  }
  return(
    <div className="Number" style={optionStyle}>
      <button onClick={setNumber}>{props.num}</button>
    </div>
  );
}

export default Number;