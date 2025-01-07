import {DIGITALSKILLS} from '../ResumeData';

export default function DigitalSkills() {
    return (
        <section className="container">
            <h1>DIGITAL SKILLS</h1>
            <hr />
            {DIGITALSKILLS.map((item) => (
                <div key={item.id}>
                    <h4>{item.title}</h4>
                </div>
            ))}
            <hr className="bottomline" />
        </section >
    )
}