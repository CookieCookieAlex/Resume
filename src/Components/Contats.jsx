import {CONTACT} from '../ResumeData';

export default function Contacts() {
    return (
        <section className="container">
            <h1 className=''>CONTATS</h1>
            <hr />
              {CONTACT.map((item) => (
                            <div key={item.id}>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        ))}
            <hr className="bottomline"/>
            </section>
    )
}