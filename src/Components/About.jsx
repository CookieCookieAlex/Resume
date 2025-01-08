import React from 'react';
import { ABOUTME } from '../ResumeData'; // Adjust the path as needed

export default function About() {

    return (
        <section>
               <h1>ABOUT ME</h1>
            {ABOUTME.map((item, index) => (
                <div key={index} className="container">
                 
                    <hr />
                    <h4>{item.description}</h4>
                    <hr className="bottomline"/>
                </div>
            ))}
        </section>
    )
}

