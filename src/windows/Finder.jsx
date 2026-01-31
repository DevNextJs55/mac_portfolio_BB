import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";

const Finder = () => {
    return (
        <>
            <div id="window-header">
                <p>Window Controls</p>
                <h2>Finder</h2>
            </div>
            <div>
                Finder Window
            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, "finder" )
export default Finder
