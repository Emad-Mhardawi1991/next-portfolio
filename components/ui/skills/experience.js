import classes from "./experience.module.scss";

const Experience = () => {
  return <div className={classes.experience_row}>
    <time>2012</time>
    <div className={classes.text}>
        <h4 className={classes.job_title}>Full Stack Developer </h4>
        <p className={classes.company}>Swedbank</p>
    </div>
  </div>;
};

export default Experience;
