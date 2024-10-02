import React, { useState } from 'react';
import './services.css';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services-container container grid">
                <div className="services-content">
                    <div>
                        <i className="ull uil-web-grid services-icon"></i>
                        <h3 className="services-title">Web <br /> Developer</h3>
                    </div>

                    <span className="services-button" onClick={() => toggleTab(1)}>
                        View More
                    <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services-modal-close"></i>

                            <h3 className="services-modal-title">Web Developer</h3>
                            <p className="services-modal-description">
                                Service with more than 4 year experience. Deliver quality results to clients.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Can develop interactive websites.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Create static or dynamic landing pages.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Simple layout and modern UI according to advances in the world of technology.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Always maintain and debug the website to make users comfortable.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                    Using the latest tech stack also keeps up with technological developments.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-content">
                    <div>
                        <i className="ull uil-arrow services-icon"></i>
                        <h3 className="services-title">UI/UX <br /> Designer</h3>
                    </div>

                    <span className="services-button" onClick={() => toggleTab(2)}>
                        View More
                    <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services-modal-close"></i>

                            <h3 className="services-modal-title">UI/UX Designer</h3>
                            <p className="services-modal-description">
                                Service with more than 4 year experience. Deliver quality results to clients.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Design UI according to design rules and attractive user friendly.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Building UX to make it easier for users to interact.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Designing UI/UX using Figma and other components can be customized in Adobe Illustrator.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        The design is easy to apply to website and application displays.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Clients can interact with prototypes that have been created to make them easier to maintain.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-content">
                    <div>
                        <i className="ull uil-edit services-icon"></i>
                        <h3 className="services-title">Graphic <br /> Designer</h3>
                    </div>

                    <span className="services-button" onClick={() => toggleTab(3)}>
                        View More
                    <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services-modal-close"></i>

                            <h3 className="services-modal-title">Graphic Designer</h3>
                            <p className="services-modal-description">
                            Service with more than 1 year experience. Deliver quality results to clients.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Create product designs according to the given theme.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Create product designs according to the given theme.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Create design brands according to client's brand theme.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Can be a Specialist Design according to client needs.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Designing a public advertisement or poster.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
    )
}

export default Services;