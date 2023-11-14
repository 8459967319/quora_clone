import React from "react";

import './css/WidgetContent.css'

function WidgetContent() {

  return (
    <div className="widget__contents">
      <div className="widget__content">
        <img src="./images/programmer.jpg" alt="" />
        <div className="widget__contentTitle">
          <h5>Mobile App Programmer</h5>
          <p>The best Mobile App Development Company</p>
        </div>
      </div>
      <div className="widget__content">
        <img src="./images/developer.jpg" alt="" />
        <div className="widget__contentTitle">
          <h5>Web Developer</h5>
          <p>The best Website Development Company</p>
        </div>
      </div>
      <div className="widget__content">
        <img src="" alt="" />
        <img src="./images/artist.jpg" alt="" />
        <div className="widget__contentTitle">
          <h5>Art & Artist</h5>
          <p>This world is but a canvas to our imagination</p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
