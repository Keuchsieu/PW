import React from 'react';
import Instrution from './Instruction';

var headerStyle = {
  height: '100px',
  width: '100%',
  position: 'fixed', 
  background: '#ffffff',
  textAlign: 'center'
}

var yqStyle = {
  display: 'inline-block',
  marginTop: '30px',
}



function Header(props){
  return(
    <div className="Header" style={headerStyle}>
      <h3 className="titles" id="MyName" style={yqStyle}>Yuqing Qiu's Sudoku Solver</h3>
      <Instrution />
    </div>
  );
}

export default Header;