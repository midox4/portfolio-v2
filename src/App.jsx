import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import { useEffect, useState } from "react"
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
console.log(isScrollingUp)
  useEffect(()=>{
    scrollTo(0,0)
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrollingUp(scrollTop > 0); // Check if scrolled to top
  },[])
  return (
    <>  
      <Header />
      <main className="main">
        <Home  />
        <About />
        <Skills />
        <Portfolio />

        <Contact />
      </main>
      <Footer />
      <ScrollUp />

    </>
  );
};

export default App;
