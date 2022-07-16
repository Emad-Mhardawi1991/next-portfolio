import classes from "./aboutCard.module.scss";

const AboutCard = (props) => {
  return (
    <div className={classes.aboutCard}>
      <img src={props.about.imageUrl} alt="card" />
      <h3>{props.about.title}</h3>
      <p className={classes.description}> {props.about.description}</p>
    </div>
  );
};

export default AboutCard;



