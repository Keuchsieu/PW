import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';

var bodyStyle = {
  height: '1000px',
  paddingTop: '102px',
  background: '#eeeeee'
};

function MainPage(props){
  return(
      <div className="MainPage">
        <Header />
        <div className="MainBody" style={bodyStyle}>content here</div>
        <Footer />
      </div>
  );
}

export default MainPage;