import "./index.css";
import imgs from '../images/images.js';

const Footer = () => {
    return (
        <footer className="footer-section px-14 bg-blue-950 text-white flex flex-col sm:flex-row justify-between items-center py-5 sm:py-0">
            <div className="footer-nav-social flex flex-col sm:flex-row items-center">
                <div className="footer-logo">
                    <img src={imgs.whiteBookmark} alt="bookmark-logo" className="" />
                </div>

                <ul className="footer-links text-grey-50 uppercase tracking-[3px] p-4 sm:py-1 flex flex-col sm:flex-row">
                    <li className="p-2 hover:text-red-400"><a href="#features">Features</a></li>
                    <li className="p-2 hover:text-red-400"><a href="#">Pricing</a></li>
                    <li className="p-2 hover:text-red-400"><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="footer-social flex flex-row gap-4 p-4 sm:py-1">
                <a href="https://facebook.com" target="_blank"><img src={imgs.iconFacebook} alt="facebook"/></a>
                <a href="https://x.com" target="_blank"><img src={imgs.iconTwitter} alt="twitter" /></a>
            </div>

        </footer>
    )
}

export default Footer;