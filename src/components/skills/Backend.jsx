import { Images } from "./Data";
import { motion } from "framer-motion";

import "./skills.css";

const Backend = () => {
  return (
    <div className="container" id="skills">
     
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="skills"
      >
        <div className="grid-container">
          {Images.map((image) => (
            <div className="grid-item" key={image.id}>
              <img src={image.img} alt={image.name} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Backend;
