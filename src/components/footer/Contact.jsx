
import "./footer.css"
import MailIcon from '@mui/icons-material/Mail';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import emailAnimation from '../../../public/animation/email.json'
import newdone from '../../../public/animation/newdone.json'

const Contact = () => {
    const [state, handleSubmit] = useForm("moqgrepw");

    return (
        <section className="contact-us">
            <h1 className="title">
                <MailIcon fontSize="large" sx={{ mr: 2 }} />
                <span className="icon-envelope">
                    Contact us
                </span>
            </h1>
            <p className="sub-title">If you have any inquiries or encounter any problems, do not hesitate to contact us</p>

            <div className="flex" style={{ justifyContent: "space-between" }}>
                <form onSubmit={handleSubmit}>
                    <div className="flex">
                        <label htmlFor="email"> Email Address: </label>
                        <input autoComplete="off" required type="email" id="email" name="email" style={{padding:"10px 10px"}} />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>

                    <div className="flex" style={{ marginTop: "24px" }}>
                        <label htmlFor="">Your message:</label>
                        <textarea required name="message" id="message" cols="30" rows="3" style={{padding:"10px 10px"}}/>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    <button className="submit" disabled={state.submitting}>{state.submitting ? "Submitting " : "Submit"}</button>

                    {state.succeeded && (
                        <p className="flex" style={{ fontSize: "18px",   marginTop: "1.5rem", }}>
                            <Lottie
                            
                                loop={false}
                                animationData={newdone}
                                style={{
                                    width: 35,
                                    marginRight: "0.5rem"
                                

                                }}
                                className= " flex"

                            />
                            Your message has been sent successfully!</p>)}
                </form>
                <div className="animation ">
                    <Lottie
                        className="contact-animation " 
                        animationData={emailAnimation}
                        style={{
                            height: 300,
                            paddingBottom:"20px"
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Contact