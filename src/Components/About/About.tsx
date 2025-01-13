import "./About.css";
import CountUp from "react-countup";
import {useEffect, useRef, useState} from "react";
// import javaLogo from "../../assets/JAVAicon.png";
// import reactLogo from "../../assets/reacticon.png";
// import htmlLogo from "../../assets/html.png";
// import tsLogo from "../../assets/typescript.png";
// import dockerLogo from "../../assets/Docker.png";
// import mySqlLogo from "../../assets/mySQL.png";



export function About(): JSX.Element {

    // const [showPlus, setShowPlus] = useState(false);
    //
    //
    //
    //
    // return (
    //     <div className="about">
    //         <div className={"about-title"}>
    //             <h1>About me</h1>
    //             {/*<img src={"#"} alt={"themePattern"}/>*/}
    //         </div>
    //         <div className={"about-sections"}>
    //             <div className={"about-left"}>
    //                 <img src={"#"} alt={"profile_img"}/>
    //             </div>
    //             <div className={"about-right"}>
    //                 <div className={"about-para"}>
    //                     <p>Hi, I'm Tomer, a Java Full Stack Development graduate with a solid foundation in back-end,
    //                         front-end, and data structures & algorithms. I am eager to apply my expertise and committed
    //                         to continuous professional growth. Passionate about problem-solving, feature development,
    //                         and collaboration, I completed my course with distinction. Please visit my GitHub to review
    //                         my work and technical skills.</p>
    //                     {/*<p>im looking for my first job</p>*/}
    //                 </div>
    //             </div>
    //         </div>
    //         <div className={"about-achievements"}>
    //             <div className={"about-achievement"}>
    //                 <h1 className="statsistic">
    //                     <CountUp
    //                         start={0}
    //                         end={5}
    //                         duration={3}
    //                         onEnd={() => setShowPlus(true)}
    //                     />
    //                     {showPlus && "+"}
    //                 </h1>
    //                 <p>Projects</p>
    //             </div>
    //             <hr/>
    //             <div className="about-achievement">
    //                 <h1 className="statistic">
    //                     <CountUp
    //                         start={0}
    //                         end={748}
    //                         duration={4}
    //                     />
    //                 </h1>
    //                 <p>Java full stack development course hours</p>
    //                 <h1 className="statistic">
    //                     <CountUp
    //                         start={0}
    //                         end={99}
    //                         duration={4}
    //                     />
    //                 </h1>
    //                 <p>Grade Average</p>
    //             </div>
    //             <hr/>
    //             <div className="about-achievement">
    //                 <h1 className="statistic">
    //                     <CountUp
    //                         start={0}
    //                         end={10}
    //                         duration={3}
    //                         onEnd={() => setShowPlus(true)}
    //                     />
    //                     {showPlus && "+"}
    //                 </h1>
    //                 <p>Online Courses self taught</p>
    //             </div>
    //         </div>
    //
    //
    //     </div>
    // );
    const [hasStartedProjectsCountUp, setHasStartedProjectsCountUp] = useState(false);
    const [hasStartedCoursesCountUp, setHasStartedCoursesCountUp] = useState(false);
    const [hasStartedJavaCourseCountUp, setHasStartedJavaCourseCountUp] = useState(false);

    // Refs for each section to observe
    const projectsRef = useRef(null);
    const coursesRef = useRef(null);
    const javaCourseRef = useRef(null);

    // Create the Intersection Observer to detect visibility
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Check if the element is in view
                if (entry.isIntersecting) {
                    if (entry.target === projectsRef.current && !hasStartedProjectsCountUp) {
                        setHasStartedProjectsCountUp(true);  // Start count-up for Projects
                    }
                    if (entry.target === coursesRef.current && !hasStartedCoursesCountUp) {
                        setHasStartedCoursesCountUp(true);  // Start count-up for Courses
                    }
                    if (entry.target === javaCourseRef.current && !hasStartedJavaCourseCountUp) {
                        setHasStartedJavaCourseCountUp(true);  // Start count-up for Java Courses
                    }
                }
            });
        }, { threshold: 0.5 });  // Trigger when 50% of the element is visible

        // Start observing the elements
        if (projectsRef.current) observer.observe(projectsRef.current);
        if (coursesRef.current) observer.observe(coursesRef.current);
        if (javaCourseRef.current) observer.observe(javaCourseRef.current);

        // Cleanup observer when component is unmounted
        return () => {
            if (projectsRef.current) observer.unobserve(projectsRef.current);
            if (coursesRef.current) observer.unobserve(coursesRef.current);
            if (javaCourseRef.current) observer.unobserve(javaCourseRef.current);
        };
    }, [
        hasStartedProjectsCountUp,
        hasStartedCoursesCountUp,
        hasStartedJavaCourseCountUp
    ]);

    return (
        <div className="about">
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src="#" alt="profile_img" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            Hi, I'm Tomer, a Java Full Stack Development graduate with a solid foundation in back-end,
                            front-end, and data structures & algorithms. I am eager to apply my expertise and committed
                            to continuous professional growth. Passionate about problem-solving, feature development,
                            and collaboration, I completed my course with distinction. Please visit my GitHub to review
                            my work and technical skills.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                {/* Projects Section */}
                <div className="about-achievement" ref={projectsRef}>
                    <h1 className="statistic">
                        {hasStartedProjectsCountUp && <CountUp start={0} end={5} duration={3} />}
                    </h1>
                    <p>Projects</p>
                </div>
                <hr />

                {/* Java Course Section */}
                <div className="about-achievement" ref={javaCourseRef}>
                    <h1 className="statistic">
                        {hasStartedJavaCourseCountUp && <CountUp start={0} end={748} duration={4} />}
                    </h1>
                    <p>Java full stack development course hours</p>
                    <h1 className="statistic">
                        {hasStartedJavaCourseCountUp && <CountUp start={0} end={99} duration={4} />}
                    </h1>
                    <p>Grade Average</p>
                </div>
                <hr />

                {/* Online Courses Section */}
                <div className="about-achievement" ref={coursesRef}>
                    <h1 className="statistic">
                        {hasStartedCoursesCountUp && <CountUp start={0} end={10} duration={3} />}
                    </h1>
                    <p>Online Courses self-taught</p>
                </div>
            </div>
        </div>
    );

}
