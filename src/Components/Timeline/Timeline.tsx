import "./Timeline.css";
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import MilitaryTechTwoToneIcon from '@mui/icons-material/MilitaryTechTwoTone';

export function Timeline(): JSX.Element {

    return (
        <>
            <div className={"timeline-container"}>
            <div className={"about-title"}>
                <h1>Time Line</h1>
            </div>
            <div className={"timeline"}>

                <div className="container left-container">
                    <div className={"education"}>
                    <SchoolTwoToneIcon sx={{fontSize:"40px"}}></SchoolTwoToneIcon>
                    </div>
                    <div className="text-box">
                        <h2>High School</h2>
                        <small>2013 - 2016</small>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem consequatur
                            consequuntur dignissimos esse excepturi expedita fugit in nesciunt, numquam odit optio
                            pariatur voluptas. Aliquid ducimus ipsum perferendis reprehenderit velit!
                        </p>
                        <span className={"left-container-arrow"}></span>
                    </div>
                </div>

                <div className="container right-container">
                    <div className={"education"}>
                        <MilitaryTechTwoToneIcon sx={{fontSize:"40px"}}></MilitaryTechTwoToneIcon>
                    </div>
                    <div className="text-box">
                        <h2>Army</h2>
                        <small>September 2016 - May 2019</small>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem consequatur
                            consequuntur dignissimos esse excepturi expedita fugit in nesciunt, numquam odit optio
                            pariatur voluptas. Aliquid ducimus ipsum perferendis reprehenderit velit!
                        </p>
                        <span className={"right-container-arrow"}></span>
                    </div>
                </div>

                <div className="container left-container">
                    <div className={"education"}>
                        <SchoolTwoToneIcon sx={{fontSize:"40px"}}></SchoolTwoToneIcon>
                    </div>
                    <div className="text-box">
                        <h2>John Bryce</h2>
                        <small>April 2024 - January 2025</small>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem consequatur
                            consequuntur dignissimos esse excepturi expedita fugit in nesciunt, numquam odit optio
                            pariatur voluptas. Aliquid ducimus ipsum perferendis reprehenderit velit!
                        </p>
                        <span className={"left-container-arrow"}></span>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
