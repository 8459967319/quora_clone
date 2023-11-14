import  Add from "@mui/icons-material/Add";
import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="./images/history.jpg"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="./images/bussiness.jpg"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="./images/psychology.jpg"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="./images/cooking.jpg"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="./images/music.jpg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="./images/science.jpg"
          alt=""
        />
        
        <p>Science</p>
      </div>

      <div  className="sidebarOption">
        <img
          src="./images/health.jpg"
          alt=""
        />
        <p>Health</p>
      </div>

      <div   style={
        {
          paddingRight:"100px"
        }
      }
       className="sidebarOption">
        <img
          src="./images/movie.jpg"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="./images/technology.jpg"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="./images/education.jpg"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;



