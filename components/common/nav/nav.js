import classes from "./nav.module.scss";

import {HiMenuAlt4, HiX } from 'react-icons/hi';
import Link from "next/link";

const Nav = () => {
  return <nav className={classes.nav}>
    <h3 className={classes.logo}><span>E</span>mad</h3>
    <ul className={classes.nav_links}>
        <li>
            <Link  href="#skills">
                <a >Home</a>
            </Link>
        </li>
        <li>About</li>
        <li>Work</li>
        <li>Skills</li>
        <li>Contact</li>
    </ul>

    <div className={classes.nav_menu}>
        <HiMenuAlt4/>
    </div>
  </nav>;
};

export default Nav;
