import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification-container container">
                <div className="qualification-tabs">
                    <div className={toggleState === 1 ? "qualification-button qualification-active button--flex" : "qualification-button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification-icon"></i>Education
                    </div>

                    <div className={toggleState === 2 ? "qualification-button qualification-active button--flex" : "qualification-button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification-icon"></i>Experience
                    </div>
                </div>

                <div className="qualification-sections">
                    <div className={toggleState === 1 ? "qualification-content qualification-content-active" : "qualification-content"}>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">SMAN 01 Talun</h3>
                                <span className="qualification-subtitle">Natural Science - student</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>                            
                            <div>
                                <h3 className="qualification-title">Surabaya State University</h3>
                                <span className="qualification-subtitle">Bachelor of Graphic Design - student</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2024 - present
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification-content qualification-content-active" : "qualification-content"}>
                    <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Content Creator</h3>
                                <span className="qualification-subtitle">Youtube</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>

                            <div>
                                <h3 className="qualification-title">Graphic Design</h3>
                                <span className="qualification-subtitle">Pixellab and Adobe</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Web Development</h3>
                                <span className="qualification-subtitle">Visual Code</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>
                        
                        <div className="qualification-data">
                            <div></div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>

                            <div>
                                <h3 className="qualification-title">UI/UX Designer</h3>
                                <span className="qualification-subtitle">Figma</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;