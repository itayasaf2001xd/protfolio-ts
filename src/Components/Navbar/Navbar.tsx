import "./Navbar.css";
import {NavLink} from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-scroll';

export function Navbar(): JSX.Element {
    return (
        <nav className={"navbar"}>
            <h1 className={"tomer"}><span className={"t"}>T</span>omer.</h1>
            <ul className={"nav-menu"}>
                <li>
                    <NavLink className={"desktopMenuListItem"} to={"#header"}>Home</NavLink>
                </li>
                <li>
                    <NavLink className={"desktopMenuListItem"} to={"#about"}>About</NavLink>
                </li>
                <li>
                    <NavLink className={"desktopMenuListItem"} to={"#skills"}>Skills</NavLink>
                </li>
                <li>
                    <NavLink className={"desktopMenuListItem"} to={"#services"}>Services</NavLink>
                </li>

                <li>
                    <NavLink className={"desktopMenuListItem"} to={"#about"}>Portfolio</NavLink>
                </li>
                <li>
                    {/*<NavLink className={"desktopMenuListItem"} to={".contact"}>Contact</NavLink>*/}
                    <Link className={"desktopMenuListItem"} to="contact-id" smooth={true} duration={500}>
                         Contact
                    </Link>
                </li>
                <li>
                    <div className={"social-media"}>
                        <NavLink className="link" to="#">
                            <GitHubIcon className="icon" sx={{fontSize: "25px", color:"#6e4f95"}}/>
                        </NavLink>
                        <NavLink className="link" to="#">
                            <LinkedInIcon className="icon" sx={{fontSize: "25px", color:"#0077B5"}}/>
                        </NavLink>
                    </div>
                </li>
            </ul>

            {/*<NavLink to={"#"} className={"nav-connect"}>Contact Me</NavLink>*/}
        </nav>
    );
}
