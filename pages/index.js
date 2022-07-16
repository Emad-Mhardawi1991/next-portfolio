import About from "../components/ui/about/about";
import classes from "../styles/Home.module.scss";

export default function Home() {
  return <div className={classes.home}>
   <About/>
  </div>;
}
