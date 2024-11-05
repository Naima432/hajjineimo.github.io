import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Exprience from "./components/Exprience";
import Skills from "./components/Skills";



const App = () => {
  return (
    <div>
      <Header/>
       <main>
          <Hero/>
          <About/>
          <Skills/>
          <Exprience/>
          <Projects/>
          <Contact/>
          <Footer/>
        
    
          

      </main>
    
  </div>
  );
};
export default App;