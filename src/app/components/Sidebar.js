import React from 'react';
import {slide as Menu} from 'react-burger-menu';

function Sidebar(props){
  return (
    <div className="Sidebar">
      <Menu>
        <a className="menu-item" href="#">
          About Me
        </a>
        <a className="menu-item" href="#contactme">Contact Me</a>
      </Menu>
    </div>
  );
};

export default Sidebar;