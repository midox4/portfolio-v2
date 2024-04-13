import { FaGithub, FaGlobe } from "react-icons/fa";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({item}) => {
  return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="img" />
            <h3 className="project__title">{item.title}</h3>
            <div className="demolink">
            <a href={item.link} className="project__button">
                Github <HiOutlineArrowSmRight className="project__button-icon" />
                <FaGithub />

            </a>
            <a href={item.link} className="project__button">
                Live Demo <HiOutlineArrowSmRight className="project__button-icon" />
                <FaGlobe />

            </a>
            </div>
        </div>
    );
}

export default ProjectItems;