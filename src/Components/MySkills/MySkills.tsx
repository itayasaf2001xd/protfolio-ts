import "./MySkills.css";
import javaLogo from "../../assets/JAVAicon.png";
import reactLogo from "../../assets/reacticon.png";
import mySqlLogo from "../../assets/mySQL.png";
import dockerLogo from "../../assets/Docker.png";
import htmlLogo from "../../assets/html.png";
import tsLogo from "../../assets/typescript.png";

export function MySkills(): JSX.Element {
    return (
        <div className="mySkills">
            <div className={"about-title"}>
                <h1>My Skills<span className={"typing-cursor"}>|</span></h1>
            </div>
            <div className={"logos"}>
                <div className={"logos-slide"}>
                    <img src={javaLogo} alt={"java"}/>
                    <img src={reactLogo} alt={"react"}/>
                    <img src={mySqlLogo} alt={"mysql"}/>
                    <img src={"#"} alt={"spring"}/>
                    <img src={dockerLogo} alt={"docker"}/>
                    <img src={htmlLogo} alt={"html"}/>
                    <img src={"#"} alt={"css"}/>
                    <img src={"#"} alt={"javascript"}/>
                    <img src={tsLogo} alt={"typescript"}/>
                </div>
                <div className={"logos-slide"}>
                    <img src={javaLogo} alt={"java"}/>
                    <img src={reactLogo} alt={"react"}/>
                    <img src={mySqlLogo} alt={"mysql"}/>
                    <img src={"#"} alt={"spring"}/>
                    <img src={dockerLogo} alt={"docker"}/>
                    <img src={htmlLogo} alt={"html"}/>
                    <img src={"#"} alt={"css"}/>
                    <img src={"#"} alt={"javascript"}/>
                    <img src={tsLogo} alt={"typescript"}/>
                </div>
            </div>

        </div>
    );
}
