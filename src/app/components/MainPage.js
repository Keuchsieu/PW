import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';


function MainPage(props){
  return(
      <div className="MainPage">
        <Header />
        <p>MainPage content here</p>
        <Footer />
      </div>
  );
}

export default MainPage;