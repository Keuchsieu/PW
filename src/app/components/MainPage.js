import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Sidebar from './Sidebar.js';

var bodyStyle = {
  height: '1000px',
  paddingTop: '102px',
  background: '#eeeeee'
};

function MainPage(props){
  return(
      <div className="MainPage">
        <Sidebar />
        <Header />
        <div className="MainBody" style={bodyStyle}>
          <div className="pageitem" id="introduction">
            <p>Who am I:</p>
            A developer,
            A something,
            some cool stuff
          </div>
          <div className="pageitem" id="project_1"></div>
        </div>
        <Footer />
      </div>
  );
}

export default MainPage;