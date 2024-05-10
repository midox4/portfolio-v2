import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { workNavs, workImages } from "./Data";

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

  return (
    <div>
      <div className="title">
        <h2 className="section__title">Awesome Projects</h2>
        <span className="section__subtitle">My Work</span>
      </div>
      <div className="buttons">
        {workNavs.map((workNav, index) => (
          <button
            onClick={(e) => activeTab(e, index)}
            className={`${active === index ? "active" : ""}`}
            key={index}
          >
            {workNav}
          </button>
        ))}
      </div>
      <div className="workImages">
        {works.map((work) => (
          <div key={work.id}>
            <div className="workImage col-lg-8">
              <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#header-carousel" data-slide-to={0} className="active" />
                  <li data-target="#header-carousel" data-slide-to={1} />
                  <li data-target="#header-carousel" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item position-relative active" style={{ height: 430 }}>
                    <img className="position-absolute w-100 h-100" src={work.img} alt={work.alt} style={{ objectFit: 'cover' }} />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: 700 }}>
                        <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">{work.title}</h1>
                        <p className="mx-md-5 px-5 animate__animated animate__bounceIn">{work.description}</p>
                        <Link to='/products' className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp">Shop Now</Link>
                      </div>
                    </div>
                  </div>
                  {/* Add similar blocks for other carousel items */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
