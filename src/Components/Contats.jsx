import {ResumeData} from '../ResumeData.js';

export default function Contacts() {
    return (
        <section className="container">
            <h1 className=''>CONTATS</h1>
            <hr />
              {ResumeData.contact.map((item) => (
                            <div key={item.id}>
                                <a href={item.description} target="_blank" className='link'>{item.title}</a>
                            </div>
                        ))}
            <hr className="bottomline"/>
            </section>
    )
}