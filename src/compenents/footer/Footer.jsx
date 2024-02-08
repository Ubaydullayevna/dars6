import React from "react";
import style from './footer.modul.css'

function Footer() {
  return <div className="footer ">
    <div className="footer-contain container">
    <div className="footer_typo ">
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com  020 7993 2905</p>
        </div>
        <div className="footer_icons">
            <ul className="footer_nav">
                <li className="footer_list"> <a href="" className="footer_link">
                    <img src="src/pictures/facebook.svg" alt="facebook" /></a> </li>
                <li className="footer_list"> <a href="" className="footer_link">
                    <img src="src/pictures/twitter.svg" alt="twitter" /></a> </li>
                <li className="footer_list"> <a href="" className="footer_link">
                    <img src="src/pictures/instagram.svg" alt="instagram" /></a> </li>
                <li className="footer_list"> <a href="" className="footer_link">
                    <img src="src/pictures/linkedin.svg" alt="linkedin" /></a> </li>
            </ul>
        </div>
    </div>
    </div>
 
  
}

export default Footer;
