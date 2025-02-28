import React from 'react';
import { ResumeData } from '../ResumeData.js'; // Adjust the path as needed

export default function Experience() {
    return (
        <section >
            <h1 id='experience'>WORK EXPERIENCE</h1>
            <hr />
            {ResumeData.workExperience.map((item, index) => (
                <div key={index} className="container">
                    <h1>{item.title}</h1>
                    <hr />
                    <h3>{item.company}</h3>
                    <h4>{item.date_of_completion}</h4>
                    <h4>{item.country}</h4>
                    <h4>{item.city}</h4>
                    <p>{item.description}</p>
                    <hr className="bottomline"/>   
                </div>
                
            ))}
            
        </section>
    );
}