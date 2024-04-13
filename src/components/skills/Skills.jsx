import "./skills.css";
import Backend from './Backend';

const Skills = () => {

  return (
    <section className="skills section" id="skills">
       
        <h1 className="section__title">What I Expert?</h1>
        <span className="section__subtitle">Skills</span>
        <div className="skills__container container grid">
            <Backend /> 
        </div>
    </section>
  );
}

export default Skills;