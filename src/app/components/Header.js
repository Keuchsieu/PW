import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';

var headerStyle = {
  height: '100px',
  width: '100%',
  position: 'fixed',
  top: '0', 
  background: '#ffffff'
}

var yqStyle = {
  display: 'inline-block',
  textAlign: 'center',
  margin: 'auto'
}

function Header(props){
  return(
    <div className="Header" style={headerStyle}>
      <h3 className="titles" style={yqStyle}>Yuqing Qiu</h3>
      <p style={yqStyle}>inline content that links to content below</p>
      <DropdownButton className="menu" title="testing dropdown">
        <Dropdown.Item>content 1</Dropdown.Item>
        <Dropdown.Item>2</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default Header;