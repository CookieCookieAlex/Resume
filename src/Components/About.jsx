import React from 'react';
import { ABOUTME } from '../ResumeData'; // Adjust the path as needed

export default function About() {
    const { title, description } = ABOUTME[0];

    return (
        <section className="about">
            <h1>{title}</h1>
            <h4>{description}</h4>
        </section>
    )
}

