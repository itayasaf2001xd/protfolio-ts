import "./Hero.css";
import {NavLink} from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import {NavLink} from "react-router-dom";

export function Hero(): JSX.Element {

    return (
        <div className="hero">
            
            <img src={"#"} alt={"ProfilePicture"}/>

            <div className="intro">
                <h1><span>Hi, Im Tomer,<br/></span></h1>
                <h2>Full Stack Developer</h2>
            </div>

            <div className={"social-media"}>
                <NavLink className="link" to="#">
                    <GitHubIcon className="icon" sx={{fontSize: "45px"}}/>
                </NavLink>
                <NavLink className="link" to="#">
                    <LinkedInIcon className="icon" sx={{fontSize: "45px"}}/>
                </NavLink>
            </div>
            <div className={"hero-action"}>
                {/*<NavLink to={"#"} className={"hero-connect"}>Connect With Me</NavLink>*/}
                <NavLink to={"#"} className={"hero-resume"}>Download CV</NavLink>
            </div>
        </div>
    );
}
