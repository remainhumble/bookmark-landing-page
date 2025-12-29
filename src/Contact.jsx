import "./index.css";

const Contact = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-1 py-4 px-0 bg-blue-600" id="contact">
                <span className="joined py-3 text-white uppercase tracking-[.25em] text-[11px]">35,000+ already joined</span>
                <h2 className="max-w-53 text-white font-bold text-center">Stay up-to-date with what we're doing</h2>
                <form action={"#"} className="gap-2 mt-4 flex flex-col sm:flex-row justify-center items-center">
                    <input type="text" placeholder="Enter your email address" className="border-2 border-white text-[16px] px-2 py-2 rounded-sm bg-white outline-none" />
                    <button className=" max-w-xs px-4 py-2 border-2 bg-red-400 border-red-400 text-white rounded-sm hover:text-red-400 hover:bg-white">Contact Us</button>
                </form>
                
            </div >
        </>
    )
}

export default Contact;