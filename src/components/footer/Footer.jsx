import "./footer.css";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import { motion } from "framer-motion";
import animbottom from '../../assets/animbottom.json'
import Lottie from "lottie-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title"></h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://facebook.com/crasypo"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiFacebook size={50} />
          </a>
          <a
            href="https://www.github.com/midox4"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/hafsiahmed"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin size={50} />
          </a>
        </div>
        <div className="footer_text">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 1.5 }}
          >
            <div>
              <p>
                Copyright &copy; {new Date().getFullYear()} {""}
                All Rights Reserved. 
                Made By {" "}
                <p style={{color:'blue', fontFamily:'Kaushan Script', marginTop:'20px',fontSize:"30px"}}>
                  Hafsi Ahmed
                </p>

                <Lottie 
                animationData={animbottom}
                style={{
                  width: "190px",
                  height: "100px",
                  textAlign: "center",
                  margin:"auto",
                }}
              />

             
              </p>
            </div>
          </motion.div>
        </div>
        <span className="footer__copy"></span>
      </div>
    </footer>
  );
};

export default Footer;
