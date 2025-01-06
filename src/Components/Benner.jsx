import About from "../Components/About";
import Contacts from "./Contats";
import DigitalSkills from "./DIgitalSkills";
import Education from "./Education";
import Experience from "./Experience";
import Languages from "./Languages";




export default function Benner() {
    return (
        <section className="benner">
            <div className="left">
                <About />
                <Languages />
                <Contacts />
                <DigitalSkills />
            </div>
            <div className="right">
                <Education />
                <Experience />
            </div>
        </section>
    )
}
