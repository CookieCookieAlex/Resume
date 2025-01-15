import Menu from "../../public/Menu.svg";
import Suitcase from "../../public/Suitcase.svg";
import School from "../../public/School.svg";
import Info from "../../public/Info.svg";
import React, { useState } from "react";
import NavButtons from "./NavButtons";
export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <button onClick={toggleMenu} className="menu-button">
                <img src={Menu} alt="Menu" className="svg-img-button" />
            </button>
            <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>

                <NavButtons icon={Suitcase} altText="Suitcase" onClick={() => scrollToSection('experience')} />
                     <hr className="bottomline" />
                <NavButtons icon={School} altText="School" onClick={() => scrollToSection('education')} /> 
                    <hr className="bottomline" />
                <NavButtons icon={Info} altText="Info" onClick={() => scrollToSection('about')} />
            </nav>
        </>
    );
}
