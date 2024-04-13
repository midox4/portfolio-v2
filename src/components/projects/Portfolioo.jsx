import Projects from './Projects';
import "./projects.css";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (

    <motion.div
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -100 }}
    transition={{ duration: 1 }}
    className="w-full lg:w-1/4"
  >
     <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Recent Projects</span>

        <Projects />
    </section>

  </motion.div>

   
  );
}

export default Portfolio;