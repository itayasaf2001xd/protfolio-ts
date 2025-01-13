import "./Contact.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export function Contact(): JSX.Element {
    return (
        <div id={"contact-id"} className="contact">
            <div className={"contact-section"}>
                <div className={"contact-left"}>
                    <h1>Contact Me</h1>
                    <div className={"contact-details"}>
                        <div className={"contact-detail"}>
                            <MailOutlineIcon sx={{fontSize: "30px"}}></MailOutlineIcon><p>mymail@mail.com</p>
                        </div>
                        <div className={"contact-detail"}>
                            <PhoneIcon sx={{fontSize: "30px"}}></PhoneIcon><p>phone number</p>
                        </div>
                        <div className={"contact-detail"}>
                            <LinkedInIcon sx={{fontSize: "30px"}}></LinkedInIcon><p>linkedin</p>
                        </div>
                    </div>
                </div>
                <form action="" className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder={"Enter your name"} name={'name'}/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder={"Enter your email"} name={'email'}/>
                    <label htmlFor="">Write your message here</label>
                    <textarea name={"message"} rows={8} placeholder={"Enter your message"}/>
                    <button type={"submit"} className="contact-submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
