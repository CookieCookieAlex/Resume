import React from 'react';
import { WORKEXPERIENCE } from '../ResumeData'; // Adjust the path as needed

export default function Experience() {
    return (
        <section className="exoerience">
            {WORKEXPERIENCE.map((item, index) => (
                <div key={index}>
                    <h1>Title:{item.title}</h1>
                    <h3>Compnay:{item.company}</h3>
                    <h4>City:{item.city}</h4>
                    <h4>Country:{item.country}</h4>
                    <h4>Date:{item.date_of_completion}</h4>
                    <p>Description:{item.description}</p>
                    <hr />        
                </div>
                
            ))}
            
        </section>
    );
}
