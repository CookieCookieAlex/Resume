import React from 'react';
import { EDUCATION } from '../ResumeData'; // Adjust the path as needed

export default function Education() {
    return (
        <section className="education">
            {EDUCATION.map((item, index) => (
                <div key={index}>
                    <h1>Title:{item.title}</h1>
                    <h3>College:{item.college}</h3>
                    <h4>Date:{item.date_of_completion}</h4>
                    <h4>Adress:{item.address}</h4>
                    <h4>City:{item.city}</h4>
                    <h4>Country:{item.country}</h4>
                    <hr />
                </div>
            ))}
        </section>
    );
}
