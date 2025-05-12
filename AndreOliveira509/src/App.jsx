import './App.css';
import Header from './componentes/header';
import Hero from './componentes/hero';
import Projects from './componentes/projects';
import About from './componentes/About';
import Footer from './componentes/Footer';

function App() {
  return (
    <>
      <Header />
      <section className="hero" id="hero">
        <Hero />
      </section>
      <section className="projects" id="projects">
        <Projects />
      </section>
      <section className="about" id="about">
        <About />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
