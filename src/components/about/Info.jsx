import React from 'react';

const Info = () => {
    return (
        <div className="about-info grid">
            <div className="about-box">
                <i class="bx bx-award about-icon"></i>

                <h3 className="about-title">
                    Experience
                </h3>
                <span className="about-subtitle">3 Years Working</span>
            </div>

            <div className="about-box">
            <i class="bx bx-briefcase-alt about-icon"></i>

                <h3 className="about-title">
                    Completed
                </h3>
                <span className="about-subtitle">10 Projects and <br /> 6 Learning</span>
            </div>

            <div className="about-box">
                <i class="bx bx-support about-icon"></i>

                <h3 className="about-title">
                    Support
                </h3>
                <span className="about-subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info;