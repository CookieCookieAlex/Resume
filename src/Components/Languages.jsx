import { ResumeData } from "../ResumeData.js";

export default function Languages() {
    return (
        <section className="container">
            <h1 className=''>LANGUAGES</h1>
            <hr />
            {ResumeData.languages.map((item) => (
                          <div key={item.id}>
                              <h4>{item.title}</h4>
                          </div>
                      ))}
            <hr className="bottomline"/>
        </section>
    )
}