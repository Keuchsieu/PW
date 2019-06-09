import React from 'react';
import Eng from '../external_file/eng.js';

function Footer(props){
  var now = new Date();
  return(
    <div className="Footer" id='contactme'>
      <div className="contact">
        <br />
        <p className="contact_title titles">{Eng.contactMe}</p>
        <div className="logoContainer">
          <a id="logoGithub" href="https://github.com/Keuchsieu">
            <svg className="link_logo" height="32" viewBox="0 0 16 16" width="32"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
          <a id="logoLinkedIn" href="https://www.linkedin.com/in/yuqing-qiu/">
            <svg className="link_logo" height="32" width="32" viewBox="0 0 48 48"><path fill="#0077B5" fillRule="evenodd" d="M0,4.00989318 C0,1.79529033 1.79405245,0 4.00989318,0 L43.9901068,0 C46.2047097,0 48,1.79405245 48,4.00989318 L48,43.9901068 C48,46.2047097 46.2059475,48 43.9901068,48 L4.00989318,48 C1.79529033,48 0,46.2059475 0,43.9901068 L0,4.00989318 Z M19,18.3 L25.5,18.3 L25.5,21.566 C26.437,19.688 28.838,18 32.445,18 C39.359,18 41,21.738 41,28.597 L41,41.3 L34,41.3 L34,30.159 C34,26.253 33.063,24.05 30.68,24.05 C27.375,24.05 26,26.425 26,30.159 L26,41.3 L19,41.3 L19,18.3 Z M7,41 L14,41 L14,18 L7,18 L7,41 Z M15,10.5 C15,12.985 12.985,15 10.5,15 C8.015,15 6,12.985 6,10.5 C6,8.015 8.015,6 10.5,6 C12.985,6 15,8.015 15,10.5 Z"></path></svg>
          </a>
        </div>
      </div>
      <p id="copy-right">{Eng.copyright} {now.getFullYear()} {Eng.byQYQ} {Eng.rightReserved}</p>
    </div>
  );
}

export default Footer;