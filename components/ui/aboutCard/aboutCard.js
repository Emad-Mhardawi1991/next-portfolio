import classes from "./aboutCard.module.scss";
import {motion} from "framer-motion";

const AboutCard = (props) => {
  return (
    <motion.div
      className={classes.aboutCard}
      whileInView={{ opacity: [0, 1], transition:{duration: 1} }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, type: "tween" }}
      key={props.about.title + props.about.index}
    >
      <img src={props.about.imageUrl} alt="card" />
      <h3>{props.about.title}</h3>
      <p className={classes.description}> {props.about.description}</p>
    </motion.div>
  );
};

export default AboutCard;
