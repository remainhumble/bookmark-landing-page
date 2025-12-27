import "./index.css";
import imgs from '../images/images.js';

const Hero = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-4 p-2">
             
                    <img src={imgs.illustrationHero} alt="illustration-hero" />
                   <div className="hero-img"></div>
                <div className="flex flex-col justify-center items-center md:items-start gap-4  text-center md:text-left md:ml-12">
                    <h1 className="text-blue-950 md:text-2xl">A Simple Bookmark Manager</h1>
                    <p className="text-gray-500">A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="flex flex-row justify-center gap-2 mt-2">
                        <button className="bg-blue-600 text-white p-2 rounded-sm font-medium shadow-xl">Get it on Chrome</button>
                        <button className="bg-grey-50 text-gray-600 p-2 rounded-sm font-medium shadow-xl">Get it on Firefox</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;