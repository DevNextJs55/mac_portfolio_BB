import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";

const Resume = () => {
    return (
        <>
            <div id='window-header'>
                <p>Window Controls</p>
                <h2>Resume</h2>
            </div>

            <div>
                Resume Window
            </div>
        </>
    )
}

const ResumeWindow = WindowWrapper(Resume, "resume");
export default Resume;
