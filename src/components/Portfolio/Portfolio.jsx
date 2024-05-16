import { useEffect, useState } from "react";
import "./Portfolio.scss";
import { workNavs } from "./Data";
import { workImages } from "./Data";
import { FiGithub, FiEye } from "react-icons/fi";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [works, setWorks] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (tab.name === "all") {
      setWorks(workImages);
    } else {
      const newWork = workImages.filter((workImage) => {
        return workImage.category.toLowerCase() === tab.name;
      });
      setWorks(newWork);
    }
  }, [tab]);

  const activeTab = (e, index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
// link to specified tab
  document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 600) {
      const workImages = document.querySelectorAll('.workImage');
  
      workImages.forEach(workImage => {
        const githubLink = workImage.dataset.github;
        if (githubLink) {
          workImage.addEventListener('click', function() {
            window.location.href = githubLink;
          });
        }
      });
    }
  });

  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <h2 className="section__title">Awesome Projects</h2>
        <span className="section__subtitle">My Work</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="buttons"
      >
        {workNavs.map((workNav, index) => {
          return (
            <button
              onClick={(e) => activeTab(e, index)}
              className={`${active === index ? "active" : ""}`}
              key={index}
            >
              {workNav}
            </button>
          );
        })}
      </motion.div>
{/* /* images jobs * */ }

<motion.div
  initial={{ x: 0, opacity: 0 }}
  whileInView={{ x: [-250, 0], opacity: 1 }}
  transition={{ duration: 1 }}
  exit={{ opacity: 0, y: -50 }}
  className="workImages"
>
  {works.map((work) => {
    return (
      <div className="workImage" key={work.id} data-github={work.git}>
        <img src={work.img} alt="workImg" />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: [0, 1] }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="hoverLayer"
        >
          <motion.a
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 1.1] }}
            transition={{ duration: 0.3 }}
            href={`${work.git}`}
          >
            <FiGithub />
          </motion.a>

          <motion.a
            href={`${work.demo}`}
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 1.1] }}
            transition={{ duration: 0.3 }}
          >
            <FiEye />
          </motion.a>
        </motion.div>
      </div>
    );
  })}
</motion.div>


      {/* /* images jobs * */ }






      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="talk"
      >
        <div className="talk_left">
          <h3>
            So Lets Talk About <br /> <span>Your next projects</span>
          </h3>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="talk_right"
        >
          <a href="#contact">Contact Me</a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
