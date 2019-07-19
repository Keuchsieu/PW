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

  function getSquareIDs(){
    switch(props.id){
      case 'b1': return [['s11','s12','s13'],['s21','s22','s23'],['s31','s32','s33']];
      case 'b2': return [['s14','s15','s16'],['s24','s25','s26'],['s34','s35','s36']];
      case 'b3': return [['s17','s18','s19'],['s27','s28','s29'],['s37','s38','s39']];
      case 'b4': return [['s41','s42','s43'],['s51','s52','s53'],['s61','s62','s63']];
      case 'b5': return [['s44','s45','s46'],['s54','s55','s56'],['s64','s65','s66']];
      case 'b6': return [['s47','s48','s49'],['s57','s58','s59'],['s67','s68','s69']];
      case 'b7': return [['s71','s72','s73'],['s81','s82','s83'],['s91','s92','s93']];
      case 'b8': return [['s74','s75','s76'],['s84','s85','s86'],['s94','s95','s96']];
      case 'b9': return [['s77','s78','s79'],['s87','s88','s89'],['s97','s98','s99']];
      default: return;
    };
  } 
  var sids = getSquareIDs();

  return(
  <div className="Block" id={props.id} style={blockStyle}>
    <div style={rowStyle}>
      <Square id={sids[0][0]}/>
      <Square id={sids[0][1]}/>
      <Square id={sids[0][2]}/>
    </div>
    <div style={rowStyle}>
      <Square id={sids[1][0]}/>
      <Square id={sids[1][1]}/>
      <Square id={sids[1][2]}/>
    </div>
    <div style={rowStyle}>
      <Square id={sids[2][0]}/>
      <Square id={sids[2][1]}/>
      <Square id={sids[2][2]}/>
    </div>
  </div>);
}

export default Block;