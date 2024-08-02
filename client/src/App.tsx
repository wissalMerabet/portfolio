
import { About } from './componentes/About';
import { Contact } from './componentes/Contact';
import { Footer } from './componentes/Footer';
import { Hero } from './componentes/Hero';
import { NavBar } from './componentes/NavBar';
import { Projects } from './componentes/Projects';
import { Skills } from './componentes/Skills';


export default function App() {

 
  return (
    
    <div className="bg-BgPurple">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}
