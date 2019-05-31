import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';

var yqStyle = {
  display: 'inline-block',
  textAlign: 'center',
  margin: 'auto'
}

function Header(props){
  return(
    <div className="Header">
      <h3 className="titles" style={yqStyle}>Yuqing Qiu</h3>
      <DropdownButton className="menu" title="testing dropdown">
        <Dropdown.Item>content 1</Dropdown.Item>
        <Dropdown.Item>2</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default Header;