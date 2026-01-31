import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

import {Navbar, Welcome, Dock } from "#components";
import {Terminal, Finder, Contact, Resume, Safari, Photos} from "#windows/index.js";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />
            <Terminal />
            <Finder />
            <Contact />
            <Resume />
            <Safari />
            <Photos />
        </main>
    )
}
export default App
