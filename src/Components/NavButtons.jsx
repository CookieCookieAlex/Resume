import React, { NavBar } from "react";


export default function NavButtons({ icon, altText, onClick }) {
     return ( 
        <button onClick={onClick} className="nav-button">
         <img src={icon} alt={altText} className="svg-img-button" />
          </button>
         ); 
        };