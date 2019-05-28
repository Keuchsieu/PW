import React from 'react';

function Footer(props){
  var now = new Date();
  return(
    <div className="Footer">
      <div className="contact">
        <p className="contact_title">CONTACT</p>
        <p className="contact_email">email: yuqingqiu93@gmail.com</p>
      </div>
      <p className="copy-right">Copyright @ {now.getFullYear()} by Yuqing Qiu. All rights reserved.</p>
    </div>
  );
}

export default Footer;