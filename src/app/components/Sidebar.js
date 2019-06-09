import React from 'react';
import {slide as Menu} from 'react-burger-menu';

var imgStyle = {
  height: '80px',
  width: 'auto',
  borderRadius: '50%'
}
var imgWrapper = {
  textAlign: 'center'
}

function Sidebar(props){
  return (
    <div className="Sidebar">
      <Menu>
        <div style={imgWrapper}>
        <img src="/img/ME.JPG" alt='Dummy image' style={imgStyle}/>
        </div>
        <a className="menu-item" href="#">About Me</a>
        <a className="menu-time" href="#sect1">Project 1</a>
        <a className="menu-item" href="#contactme">Contact Me</a>
      </Menu>
    </div>
  );
};

export default Sidebar;