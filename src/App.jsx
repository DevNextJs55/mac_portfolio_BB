import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

import {Navbar, Welcome, Dock, Home} from "#components";
import {Terminal, Finder, Contact, Resume, Safari, Photos, Text, Image} from "#windows/index.js";

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
            <Text />
            <Image />
            <Home />
        </main>
    )
}
export default App
