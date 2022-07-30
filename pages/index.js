import About from "../components/ui/about/about";
import Hero from "../components/ui/hero/hero";
import Work from "../components/ui/work/work";
import classes from "../styles/Home.module.scss";

export default function Home() {

const projects =[
  {id:1 , title:'blog website', category:'Web apps',  description:'a blog website built with css, react. sass', imageUrl:'images/food-app.jpg'},
  {id:2 , title:'landing page', category:'UX/UI',  description:'a blog website built with css, react. sass', imageUrl:'images/store.webp'},
  {id:3 , title:'food app', category:'Mobile Apps',  description:'a blog website built with css, react. sass', imageUrl:'images/about03.png'},
  {id:4 , title:'next store', category:'React Apps',  description:'a blog website built with css, react. sass', imageUrl:'images/about04.png'},
  {id:5 , title:'blog website', category:'Web apps',  description:'a blog website built with css, react. sass', imageUrl:'images/about01.png'},
  {id:6 , title:'landing page', category:'UX/UI',  description:'a blog website built with css, react. sass', imageUrl:'images/about02.png'},
  {id:7 , title:'food app', category:'Mobile Apps',  description:'a blog website built with css, react. sass', imageUrl:'images/about03.png'},
  {id:8 , title:'next store', category:'React Apps',  description:'a blog website built with css, react. sass', imageUrl:'images/about04.png'},
  {id:9 , title:'blog website', category:'Web apps',  description:'a blog website built with css, react. sass', imageUrl:'images/food-app.jpg'},
]

  return <div className={classes.home}>
    <Hero/>
   <About/>
   <Work projects={projects}/>
  </div>;
}
