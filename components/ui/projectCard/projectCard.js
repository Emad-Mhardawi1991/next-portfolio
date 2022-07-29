import classes from './projectCard.module.scss'
const ProjectCard =({project})=>{
    return(
        <div 
            className={classes.projectCard}>
            <div className={classes.image_box}>
                <img src={project.imageUrl} alt='project'/>
                <h4>{project.category}</h4>
            </div>
            <h3>{project.title}</h3>
            <p className={classes.description}>{project.description}</p>
        </div>
    )
}


export default ProjectCard;