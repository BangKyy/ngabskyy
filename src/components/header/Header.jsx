import React, { useState } from 'react';
import "./header.css";
import KyyLogo from "../../assets/kyyLogoBlack.svg";

const Header = () => {
    /*=============== Change Background Header ===============*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    /*=============== Toggle Menu ===============*/
        const[Toggle, showMenu] = useState(false);
    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav-logo">
                <img src={KyyLogo} alt="" className="nav-logo" />
                </a>

                <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                    <ul className="nav-list grid">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">
                                <i className="uil uil-estate nav-icon"></i>
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#about" className="nav-link">
                                <i className="uil uil-user nav-icon"></i>
                                About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#skills" className="nav-link">
                                <i className="uil uil-file nav-icon"></i>
                                Skills
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#services" className="nav-link">
                                <i className="uil uil-briefcase nav-icon"></i>
                                Services
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#portfolio" className="nav-link">
                                <i className="uil uil-scenery nav-icon"></i>
                                Portfolio
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#contact" className="nav-link">
                                <i className="uil uil-message nav-icon"></i>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times nav-close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;
