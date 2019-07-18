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
      <Square id={props.id + '1'}/>
      <Square id={props.id + '2'}/>
      <Square id={props.id + '3'}/>
    </div>
    <div style={rowStyle}>
      <Square id={props.id + '4'}/>
      <Square id={props.id + '5'}/>
      <Square id={props.id + '6'}/>
    </div>
    <div style={rowStyle}>
      <Square id={props.id + '7'}/>
      <Square id={props.id + '8'}/>
      <Square id={props.id + '9'}/>
    </div>
  </div>);
}

export default Block;