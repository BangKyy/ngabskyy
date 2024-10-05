import React from 'react';

const Framework = () =>{
    return (
        <div className="skills-content">
            <h3 className="skills-title">Framework</h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills-name">React JS</h3>
                            <span className="skills-level">Beginner</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills-name">Node JS</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills-group">
                    <div className="skills-data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills-name">Booststrap</h3>
                            <span className="skills-level">Beginner</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Framework;