import classes from "./work.module.scss";
import { useState, useRef } from "react";

import { motion } from "framer-motion";
import ProjectCard from "../projectCard/projectCard";

const Work = ({projects}) => {
const [projectsList, setProjectsList ]= useState(projects);
const tabsRef = useRef()

const clickHandle =(e, tab)=>{
    // remove tab-active class from all tabs
    e.target.parentElement.childNodes.forEach(element => {
        element.classList.remove('tab-active')
    });
    
    /// add tab-active class to clicked tap
    e.target.classList.add('tab-active')

    if(e.target.innerText == 'all'){
        setProjectsList(projects)
    }else{
        const proj=  projects.filter((project)=> project.category == tab)
        setProjectsList(proj) 
    }
}




  return (
    <motion.div 
      className={` ${classes.work} `}
      whileInView={{y:[100, 0], opacity:[0,1], transition:{duration:0.5, ease:'easeInOut'}}}
      viewport={{ once: true }}>

        <p  className="section_title"> My Creative <span>Portfolio</span> Section</p>

        <div  className={classes.tabs} ref={tabsRef}>
        <button  onClick={(e)=>clickHandle(e)} className='tab-active' >all </button>
        {[ 'Web apps', 'UX/UI', 'Mobile Apps', 'React Apps'].map((tab, index)=>(
            <button key={index} onClick={(e)=> clickHandle(e, tab)} >{tab} </button>
        ))}
        </div>
        
        <div className={classes.cards}>
        {projectsList.map((project)=>(
            <motion.div
            whileInView={{y:[100, 0], opacity:[0,1], transition:{duration:1, ease:'easeInOut'}}}
            viewport={{ once: true }}>
               <ProjectCard project={project} key={project.id}/> 
            </motion.div>
            ))}
        </div>
        
    </motion.div>
  );
};

export default Work;

