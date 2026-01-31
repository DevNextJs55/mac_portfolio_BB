import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";

const Contact = () => {
    return (
        <>
           <div id="window-header">
               <p>Window Controls</p>
               <h2>Contact</h2>
           </div>
           <div>
               Contact Window
           </div>

        </>
    )
}

const ContactWindow = WindowWrapper("Contact", "contact")
export default Contact
