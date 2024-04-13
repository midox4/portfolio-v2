import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.facebook.com/geniouspo"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <FiFacebook size={30}/>
      </a>
      <a
        href="https://www.github.com/midox4"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <FiGithub size={30}/>
      </a>
      <a
        href="https://www.linkedin.com/in/hafsiahmed/"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <FiLinkedin size={30} />
      </a>
    </div>
  );
};

export default Social;
