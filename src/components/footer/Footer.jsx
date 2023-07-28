import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <h1 className="footer-title">RIFKY ZAIDAN</h1>

                <ul className="footer-list">
                    <li>
                        <a href="#about" className="footer-link">About</a>
                    </li>
                    
                    <li>
                        <a href="#portfolio" className="footer-link">Projects</a>
                    </li>

                    <li>
                        <a href="#services" className="footer-link">Services</a>
                    </li>
                </ul>

                <div className="footer-social">
                    <a href="https://www.instagram.com/kyy.rip/" className="footer-social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/rifkyzaidanm" className="footer-social-link" target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/BangKyy" className="footer-social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer-copy">
                    &#169; Kyy. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer;