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
                                Service with more than 1 year experience. Deliver quality work to clients.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Web page development.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        I create ux element interactions.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Solve certain problems.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Design and product mockups for clients.
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
                                Service with more than 6 month experience. Deliver quality work to clients.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Intermediate science of figma software.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        I create ui/ux element interactions.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Prototype design according to the target.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Helping web developers Compile ui/ux.
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
                                Service with more than 3 year experience. Deliver quality work to clients.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Make illustrations of certain themes.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Make product designs according to the target.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Designing a website according to the client's wishes.
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