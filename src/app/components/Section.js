import React from 'react';

function Section(props){
  var contentStyle = {
    background: props.background,
  }
  return (
    <div className="Section" style={props.style}>
      <h4>{props.title}</h4>
      <div>
        <p style={contentStyle}>{props.content}</p>
        <a href={props.link}>{props.link_name}</a>
      </div>
    </div>
  );
};

export default Section;