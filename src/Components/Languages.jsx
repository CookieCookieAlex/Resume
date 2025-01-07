import { LANGUAGES } from "../ResumeData";

export default function Languages() {
    return (
        <section className="container">
            <h1 className=''>LANGUAGES</h1>
            <hr />
            {LANGUAGES.map((item) => (
                          <div key={item.id}>
                              <h4>{item.title}</h4>
                          </div>
                      ))}
            <hr className="bottomline"/>
        </section>
    )
}