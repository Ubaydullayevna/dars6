import React from "react";
import heroModule from './hero.module.css'

function Hero() {
  return <div className="hero container">
    <h4 className="hero_subtitle">Posted on startup</h4>
    <h1 className="hero_title">Step-by-step guide to choosing <br/> great font pairs</h1>
    <p className="">By <span style={{color:'#FFD050'}}>James West</span>  |  May 23, 2022 </p>
    <p className="hero_typo">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
  </div>;
}

export default Hero;
