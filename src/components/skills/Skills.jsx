import React from 'react';
import "./skills.css";
import TechStack from './TechStack';
import Framework from './Framework';
import AppTools from './AppTools';
import GraphicDesign from './GraphicDesign';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills-container container grid">
                <TechStack />
                <Framework />
                <GraphicDesign />
                <AppTools />
            </div>
        </section>
    )
}

export default Skills;