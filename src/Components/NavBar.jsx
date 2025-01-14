import Menu from "../../public/Menu.svg";
import Suitcase from "../../public/Suitcase.svg";
import School from "../../public/School.svg";
import Info from "../../public/Info.svg";
import React, { useState } from "react";

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
                <button onClick={() => scrollToSection("experience")}>
                    <img src={Suitcase} alt="Suitcase" className="svg-img-button" />
                </button>
                <hr className="bottomline" />
                <button onClick={() => scrollToSection("education")}>
                    <img src={School} alt="School" className="svg-img-button" />
                </button>                                
                <hr className="bottomline" />
                <button onClick={() => scrollToSection("about")}>
                    <img src={Info} alt="Info" className="svg-img-button" />
                </button>
            </nav>
        </>
    );
}
