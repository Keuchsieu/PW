import React from 'react';
import {slide as Menu} from 'react-burger-menu';

function Sidebar(props){
  return (
    <div className="Sidebar">
      <Menu>
        <a className="menu-item" href="#introduction">
          About Me
        </a>
      </Menu>
    </div>
  );
};

export default Sidebar;