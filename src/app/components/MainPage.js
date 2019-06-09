import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Section from './Section';

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
        <div className="MainBody">
          <div className="pageitem" id="introduction" style={bodyStyle}>
            <p>Who am I:</p>
            A developer,
            A something,
            some cool stuff
          </div>
          <Section background='grey' link='foo' title='The Title' content='fake content'/>
          <div>

          </div>
          <div className="pageitem" id="project_1"></div>
        </div>
        <Footer />
      </div>
  );
}

export default MainPage;