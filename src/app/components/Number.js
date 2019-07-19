import React from 'react';

var optionStyle = {
  display: 'inline-block',
}

function Number(props){
  function setNumber(){
    console.log("set "+props.num);
    var selected = document.getElementsByClassName("selected_square")[0].childNodes;
    selected[0].textContent = props.num;
    console.log(selected[0].textContent);
  }
  return(
    <div className="Number" style={optionStyle}>
      <button onClick={setNumber}>{props.num}</button>
    </div>
  );
}

export default Number;