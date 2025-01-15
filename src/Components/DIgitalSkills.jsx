import {ResumeData} from '../ResumeData.js';

export default function DigitalSkills() {
    return (
        <section className="container">
            <h1>DIGITAL SKILLS</h1>
            <hr />
            {ResumeData.digitalSkills.map((item) => (
                <div key={item.id}>
                    <h4>{item.title}</h4>
                </div>
            ))}
            <hr className="bottomline" />
        </section >
    )
}