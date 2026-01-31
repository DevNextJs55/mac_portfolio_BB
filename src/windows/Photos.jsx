import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";

const Photos = () => {
    return (
        <>
            <div id="window-header">
                <p>Window Controls</p>
                <h2>Photos</h2>
            </div>
            <div>
                Photos Window
            </div>
        </>
    )
}

const PhotosWindow = WindowWrapper(Photos, "photos")
export default Photos
