import React from 'react';
import { ResumeData } from '../ResumeData.js'; // Adjust the path as needed

export default function About() {

    return (
        <section>
               <h1 id='about'>ABOUT ME</h1>
            {ResumeData.aboutMe.map((item, index) => (
                <div key={index} className="container">
                 
                    <hr />
                    <h4>{item.description}</h4>
                    <hr className="bottomline"/>
                </div>
            ))}
        </section>
    )
}

