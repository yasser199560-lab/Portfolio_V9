import Header from "../components/Header";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Technologies from "../sections/Technologies";
import Projects from "../sections/Projects";
import HireMe from "../sections/HireMe";
import Contact from "../sections/Contact";

function Home() {
    return (
        <>
            <Header />

            <Hero />
            <About />
            <Skills />
            <Technologies />
            <Projects />
            <HireMe />
            <Contact />

            <Footer />
        </>
    );
}

export default Home;