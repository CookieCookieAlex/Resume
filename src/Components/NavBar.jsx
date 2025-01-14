import Menu from "../../public/Menu.svg";
import Suitcase from "../../public/Suitcase.svg";
import School from "../../public/School.svg";
import Info from "../../public/Info.svg";
import PaperClip from "../../public/PaperClip.svg";
import FileDownload from "../../public/FileDownload.svg";
import CV from "../../public/CV.svg";
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