import "./index.css";

const Contact = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-1 py-4 px-0 bg-blue-600" id="contact">
                <span className="joined py-3 text-white uppercase tracking-[.25em] text-[11px]">35,000+ already joined</span>
                <h2 className="max-w-45 text-white font-bold text-center text-sm">Stay up-to-date with what we're doing</h2>
                <div className="gap-2 mt-4 flex flex-col sm:flex-row justify-center items-center">
                    <input type="email" placeholder="Enter your email address" className="text-[16px] px-4 py-2 rounded-sm bg-white outline-none" />
                    <button className="w-full max-w-xs px-4 py-2 bg-red-400 text-white rounded-sm">Contact Us</button>
                </div>
            </div >
        </>
    )
}

export default Contact;