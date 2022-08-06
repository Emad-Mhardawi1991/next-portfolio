import Experience from './experience';
import classes from './skills.module.scss'

const Skills =()=>{

    const skills=[
        {id: 1, name:'javascript', icon:'/images/javascript.png', bgColor:'#F5EF9D'  },
        {id: 2, name:'css', icon:'/images/css.png', bgColor:'#9DCBF5'  },
        {id: 3, name:'figma', icon:'/images/figma.png', bgColor:'#EBA2A6'  },
        {id: 4, name:'git', icon:'/images/git.png', bgColor:'#EBC1C2'  },
        {id: 5, name:'React', icon:'/images/react.png', bgColor:'#D6EBF5'  },
        {id: 6, name:'redux', icon:'/images/redux.png', bgColor:'#DCB9EB'  },
        {id: 7, name:'sass', icon:'/images/sass.png', bgColor:'#9DCBF5'  },
        {id: 8, name:'typescript', icon:'/images/typescript.png', bgColor:'#EECDD4'  },
        {id: 9, name:'python', icon:'/images/python.png', bgColor:'#EECDD4'  },
        {id: 10, name:'graphql', icon:'/images/graphql.png', bgColor:'#D6EBF5'  },
        {id: 11, name:'material-Ui', icon:'/images/mu5.png', bgColor:'#D6EBF5'  },
        {id: 12, name:'flutter', icon:'/images/flutter.png', bgColor:'#D6EBF5'  },
        {id: 13, name:'node', icon:'/images/node.png', bgColor:'#A6F2F7'  },
        {id: 12, name:'flutter', icon:'/images/flutter.png', bgColor:'#D6EBF5'  },
        {id: 13, name:'vue', icon:'/images/vue.png', bgColor:'#D6EBF5'  },
        {id: 14, name:'git', icon:'/images/git.png', bgColor:'#EBC1C2'  },
        {id: 15, name:'React', icon:'/images/react.png', bgColor:'#D6EBF5'  },
        {id: 16, name:'redux', icon:'/images/redux.png', bgColor:'#DCB9EB'  },
        {id: 17, name:'sass', icon:'/images/sass.png', bgColor:'#9DCBF5'  },
        {id: 18, name:'typescript', icon:'/images/typescript.png', bgColor:'#EECDD4'  },
        {id: 19, name:'python', icon:'/images/python.png', bgColor:'#EECDD4'  },
    ]










    return(
        <div className={`section-container ${classes.skills} `}>
            <p className={`section_title ${classes.title}`}> Skills <span> & </span> Experience </p>
            <div className={classes.skills_container}>
                <div className={classes.skills_list}>
                {skills.map((skill)=>(
                        <div key={skill.id} className={classes.skill_icon} style={{background: skill.bgColor}}>
                            <img src={skill.icon} alt={skill.name}/>
                        </div>
                    ))}
                </div>
                <div className={classes.experiences_list} style={{fontSize:'2rem'}}>
                    <Experience/>
                    <Experience/>
                    <Experience/>
                </div>
            </div>
        </div>
    )
}

export default Skills;



/*

    <p className="section_title"> Skills <span> & </span> Experience </p>
            <div className={classes.skills_container}>
                <div className={classes.skills_list}>
                    {skills.map((skill)=>(
                        <div key={skill.id} className={classes.skill} style={{background: skill.bgColor}}>
                            <img src={skill.icon} alt={skill.name}/>
                        </div>
                    ))}
                </div>
                <div className={classes.experiences}>
                    <Experience/>
                    <Experience/>
                    <Experience/>
                    <Experience/>
                    <Experience/>
                </div>

            </div>
*/