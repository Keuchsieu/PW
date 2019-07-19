import React from 'react';
import Number from './Number';

var buttonStyle={
  display: 'inline-block'
};

function Options(props){
  var clear = function(){
    console.log('clears');
    var selected = document.getElementsByClassName("selected_square")[0].firstChild;
    selected.textContent = "";
    // clears one square
  }

  var clearAll = function(){
    console.log("clear all");
    var sqrs = document.getElementsByClassName("Square");
    for(let i = 0; i<sqrs.length;i++){
      sqrs[i].childNodes[0].textContent = "";
    }
    // clear out 81 numbers
  }

  var solver = function(){
    // get 81 numbers
    var board = [];
    for(let i=1;i<10;i++){
      let row = []
      for(let j=1;j<10;j++){
        let bid = "s"+i+j;
        let s = document.getElementById(bid).innerText;
        if(s == ''){
          row.push('.');
        } else {
          row.push(s);
        }
      }
      board.push(row);
    }
    console.log(board);

    // send to API
    fetch('api/solvesudoku/v1.0', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'board': board
      })
    }).then((res)=>{// receive respond
      res.json().then(solution => {
        console.log(solution.data);
        // assign to buttons
        for(let i=1;i<10;i++){
          for(let j=1;j<10;j++){
            let sqr = document.getElementById('s'+i+j).firstElementChild;
            sqr.innerText = solution.data[i-1][j-1];
          }
        }
      });
    });
  }

  return(
    <div className="Options">
      <h6>
        <Number num={1} />
        <Number num={2} />
        <Number num={3} />
        <Number num={4} />
        <Number num={5} />
        <Number num={6} />
        <Number num={7} />
        <Number num={8} />
        <Number num={9} />
      </h6>
      <br></br>
      <div>
        <button id="clearAll" onClick={clearAll}>Clear All</button>
        <button id="clear" onClick={clear} style={buttonStyle}>Clear</button>
        <button id="solve" onClick={solver} style={buttonStyle}>Solve</button>
      </div>
    </div>
  )
}

export default Options;