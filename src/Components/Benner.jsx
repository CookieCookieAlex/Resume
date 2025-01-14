import About from "../Components/About";
import Contacts from "./Contats";
import DigitalSkills from "./DIgitalSkills";
import Education from "./Education";
import Experience from "./Experience";
import Languages from "./Languages";
import TopButton from "../Components/TopButton";



export default function Benner() {
    return (
        <section className="benner">
            <div className="left">
                <About />
                <Languages />
                <DigitalSkills />
                <Contacts />
            </div>
            <div className="line"></div>
            <div className="right">
                <Education><h1>EDUCATION</h1></Education>
                <Experience><h1>EXPERIENCE</h1></Experience>
            </div>
            <TopButton />
            
        </section>
    )
}
