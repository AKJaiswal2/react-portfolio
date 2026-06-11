import { Footer } from "./layouts/Footer";
import { Navbar } from "./layouts/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Testimonials } from "./sections/Testimonials";


function App() {
  return (<div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <About/>
      <Contact/>
      <Hero/>
      <Projects/>
      <Experience/>
      <Testimonials/>
    </main>
    <Footer/>
    </div>);
}

export default App;
