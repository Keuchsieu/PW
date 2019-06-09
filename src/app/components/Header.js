import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';

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

var imgStyle = {
  height: '80px',
  width: 'auto',
  borderRadius: '50%'
}

function Header(props){
  return(
    <div className="Header" style={headerStyle}>
      <h3 className="titles" id="MyName" style={yqStyle}>Yuqing Qiu</h3>
      <img src='/ME.JPG' alt='Me' style={imgStyle}></img>
    </div>
  );
}

export default Header;