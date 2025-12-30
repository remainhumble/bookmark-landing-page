import "./index.css";
import { useState } from "react";
import imgs from '../images/images.js';

const Contact = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length > 0 && !validateEmail(email)) {
            setError(true);
        } else if (validateEmail(email)) {
            setError(false);
            setSubmitted(true);
        }
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-1 pt-3 pb-9 px-0 bg-blue-600" id="contact">
                <span className="joined py-3 text-white uppercase tracking-[.25em] text-[11px]">35,000+ already joined</span>
                <h2 className="max-w-53 text-white font-bold text-center">Stay up-to-date with what we're doing</h2>
                {submitted ? (
                    <span className="text-white text-center mt-4">Thank you for subscribing!</span>
                ) : (
                    <form onSubmit={handleSubmit} className="mt-4 flex flex-col items-center">
                        <div className="flex flex-col w-full sm:flex-row gap-2">
                            <div className="relative bg-red-400 duration-300 rounded-[0.3125rem] ">
                                <label htmlFor="email" className="sr-only">Email Address</label>
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className={`w-full border-2 text-[16px] px-2 py-2 rounded-sm bg-white outline-none flex-1 ${error ? 'border-red-400' : 'border-white'}`}
                                />
                                <img src={imgs.iconError} alt="error" className={`absolute -translate-y-1/4 right-[0.65rem] top-[25%] ${error ? 'block' : 'hidden'}`} />
                                <span className="error w-full flex justify-start text-sm rounded-sm py-1 px-2 italic text-white" style={{ display: error ? 'block' : 'none' }}>
                                    Whoops, make sure it's an email
                                </span>
                            </div>
                            <div>
                                <button
                                    className="contactBtn w-full px-4 py-2 border-2 bg-red-400 border-red-400 text-white rounded-sm hover:text-red-400 hover:bg-white"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div >
        </>
    )
}

export default Contact;