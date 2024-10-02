import React from 'react';

const TechStack = () =>{
    return (
        <div className="skills-content">
            <h3 className="skills-title">Tech Stack</h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills-name">HTML</h3>
                            <span className="skills-level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills-name">CSS</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills-name">Git</h3>
                            <span className="skills-level">Beginner</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills-name">SQL</h3>
                            <span className="skills-level">Beginner</span>
                        </div>
                    </div>
                </div>

                <div className="skills-group">
                    <div className="skills-data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills-name">JavaScript</h3>
                            <span className="skills-level">Elementary</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills-name">Python</h3>
                            <span className="skills-level">Beginner</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills-name">PHP</h3>
                            <span className="skills-level">Beginner</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechStack;