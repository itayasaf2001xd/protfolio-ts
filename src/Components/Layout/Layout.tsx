import "./Layout.css";
import {Navbar} from "../Navbar/Navbar.tsx";
import {Hero} from "../Hero/Hero.tsx";
import {About} from "../About/About.tsx";
import {Contact} from "../Contact/Contact.tsx";
import {Timeline} from "../Timeline/Timeline.tsx";
import {MySkills} from "../MySkills/MySkills.tsx";
import {Services} from "../Services/Services.tsx";
import {Portfolio} from "../Portfolio/Portfolio.tsx";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<Navbar/>
            <Hero/>
            <About/>
            <Timeline/>
            <MySkills/>
            <Services/>
            <Portfolio/>
            <Contact/>
        </div>
    );
}
