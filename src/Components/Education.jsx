import React from 'react';
import { ResumeData } from '../ResumeData.js'; // Adjust the path as needed

export default function Education() {
    return (
        <section>
            <h1 id='education'>EDUCATION</h1>
            <hr />
            {ResumeData.education.map((item, index) => (
                <div key={index} className="container">
                    <h1>{item.title}</h1>
                    <hr />
                    <h3>{item.college}</h3>
                    <h4>{item.date_of_completion}</h4>
                    <h4>{item.country}</h4>
                    <h4>{item.city}</h4>
                    <h4>{item.address}</h4>
                    <hr className="bottomline" />

                </div>
            ))}
        </section>
    );
}
