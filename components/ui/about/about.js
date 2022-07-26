import AboutCard from "../aboutCard/aboutCard";
import classes from "./about.module.scss";

const About = () => {

  const abouts = [
    {title: 'Web Development', description: 'I am a frontend developer with a passion for creating beautiful web applications', imageUrl: 'images/about01.png'},
    {title: 'Frontend Development', description: 'I am a frontend developer with a passion for creating beautiful web applications', imageUrl: 'images/about02.png'},
    {title: 'Backend Development', description: 'I am a frontend developer with a passion for creating beautiful web applications', imageUrl: 'images/about03.png'},
    {title: 'MERN Stack', description: 'I am a frontend developer with a passion for creating beautiful web applications', imageUrl: 'images/about04.png'}
]

  return <div className={`section-container ${classes.about} `}>
    <p className="section_title"> I Know That <span>Good Development</span> <br/> Means <span>Good Business</span> </p>
    <div className={classes.cards}>
      {abouts.map((about, index)=>(
        <AboutCard about={about} key={index }/>
      ))}
        
      
      
    </div>
  </div>;
};

export default About;
