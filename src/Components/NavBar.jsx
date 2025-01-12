import Menu from "../assets/Menu.svg";
import Suitcase from "../assets/Suitcase.svg";
import School from "../assets/School.svg";
import Info from "../assets/Info.svg";
import PaperClip from "../assets/PaperClip.svg";
import FileDownload from "../assets/FileDownload.svg";
import CV from "../assets/CV.svg";
import React, { useState } from "react";


export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <button onClick={toggleMenu} className="menu-button">
                <img src={Menu} alt="Menu" className="svg-img-button" />
            </button>

            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <button>
                    <img src={Suitcase} alt="Suitcase" className="svg-img-button" />
                </button>
                <hr className="bottomline" />
                <button>
                    <img src={School} alt="School" className="svg-img-button" />
                </button>
                <hr className="bottomline" />
                <button>
                    <img src={CV} alt="CV" className="svg-img-button" />
                </button>
                <hr className="bottomline" />
                <button>
                    <img src={Info} alt="Info" className="svg-img-button" />
                </button>
                <hr className="bottomline" />
                <button>
                    <img src={PaperClip} alt="PaperClip" className="svg-img-button" />
                </button>
                <hr className="bottomline" />
                <button>
                    <img src={FileDownload} alt="FileDownload" className="svg-img-button" />
                </button>
            </nav>
        </>
    );
}