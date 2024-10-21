import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineDesktopComputer, HiOutlineTerminal } from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">+3 Years</span>
        </div>
        <div className="about__box">
            <HiOutlineTerminal className="about__icon" />
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">5+ Projects</span>
        </div>
        <div className="about__box">
            <FiPhoneCall className="about__icon" />
            <h3 className="about__title">Phone</h3>
            <span className="about__subtitle">+1(514)-241-7703</span>
        </div>
    </div>
  );
}

export default Info;
