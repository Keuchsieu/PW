import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Board from './Board';

var mainStyle = {

};

function MainPage(props){
  return(
      <div className="MainPage">
        <Header />
        <Board />
        <Footer />
      </div>
  );
}

export default MainPage;