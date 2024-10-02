import React from 'react';

const GraphicDesign = () => {
    return (
      <div className="skills-content">
            <h3 className="skills-title">Design</h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills-name">UI/UX</h3>
                            <span className="skills-level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills-name">Website/app</h3>
                            <span className="skills-level">Advanced</span>
                        </div>
                    </div>
                </div>

                <div className="skills-group">
                    <div className="skills-data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills-name">Logo</h3>
                            <span className="skills-level">Beginner</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills-name">Poster</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraphicDesign;