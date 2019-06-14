import React from 'react';
import Square from './Square';
function Block(props){
  var blockStyle = {
    height: '90px',
    width: '90px',
    display: 'inline-block'
  };
  if(props.color == 'a'){
    blockStyle.background = '#eeeeff';
  };
  var rowStyle={
    height: '33.3333%',
    width: '100%'
  }
  return(
  <div className="Block" id={props.id} style={blockStyle}>
    <div style={rowStyle}>
      <Square />
      <Square />
      <Square />
    </div>
    <div style={rowStyle}>
      <Square />
      <Square />
      <Square />
    </div>
    <div style={rowStyle}>
      <Square />
      <Square />
      <Square />
    </div>
  </div>);
}

export default Block;