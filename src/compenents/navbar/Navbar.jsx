import React from "react";
import style from './navbar.modul.css'
function Navbar() { 
  return <div className="nav_section">
       <div className="container">
    <div className="navbar">
    <a href="" className="sitenav_logo">
        <img src="src/pictures/logo.svg" alt="" />
       </a>
        
        <div className="sitenav_section">
        <ul className="sitenav_list">
        <li className="sitenav_item"><a href="" className="sitenav_link">Home</a> </li>
        <li className="sitenav_item"><a href="" className="sitenav_link">Blog</a> </li>
        <li className="sitenav_item"><a href="" className="sitenav_link">About Us</a> </li>
        <li className="sitenav_item"><a href="" className="sitenav_link">Register</a> </li>
       </ul>

       <a href="#">
        <button className="sitenav_btn">Login</button>
       </a>
        </div>
    </div>

  </div>;
  </div>
}

export default Navbar;
