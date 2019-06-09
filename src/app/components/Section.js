import React from 'react';

function Section(props){
  var contentStyle = {
    background: props.background,
  }
  return (
    <div className="Section">
      <h4>{props.title}</h4>
      <div>
        <p style={contentStyle}>{props.content}</p>
        <a href={props.link}>Repo at GitHub</a>
      </div>
    </div>
  );
};

export default Section;