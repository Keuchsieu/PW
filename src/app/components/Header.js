import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';

function Header(props){
  return(
    <div className="Header">
      <DropdownButton title="testing dropdown">
        <Dropdown.Item>content 1</Dropdown.Item>
        <Dropdown.Item>2</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default Header;