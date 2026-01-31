import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";

const Safari = () => {
    return (
        <>
            <div id="window-header">
                <p>Windows Control</p>
                <h2>Safari</h2>
            </div>
            <div>
                Safari Window
            </div>
        </>
    )
}

const SafariWindow= WindowWrapper(Safari, "safari")
export default Safari
