import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Section from './Section';

var bodyStyle = {
  height: '1000px'
};

var introStyle = {
  paddingTop: '102px',
};
var sectionStyle = {

};

function MainPage(props){
  return(
      <div className="MainPage">
        <Sidebar />
        <Header />
        <div className="MainBody" style={bodyStyle}>
          <div className="pageitem" id="introduction" style={introStyle}>
            <p>Who am I:</p>
            A developer,
            A something,
            some cool stuff
          </div>
          <Section background='grey' link='foo' title='The Title' content='fake content' style={sectionStyle} />
          <div className="pageitem" id="project_1"></div>
        </div>
        <Footer />
      </div>
  );
}

export default MainPage;