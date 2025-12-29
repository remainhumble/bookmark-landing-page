import "./index.css";
import imgs from '../images/images.js';
import featuresObj from "./FeaturesObject";

const Features = () => {
    return (
        <>
            <div className="my-21 px-4" id="features">
                <div className=" md:px-54">
                    <h2 className="text-blue-950">Features</h2>
                    <p className="text-gray-400 py-3">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                </div>
                <ul className="text-gray-500 flex sm:flex-row flex-col justify-center items-center mt-4 joined max-w-md mx-auto">
                    <li className="w-full border-solid border-b-0 sm:border-b-[1.5px] border-t-[1.5px] sm:border-t-0 h-full py-2 hover:text-red-400">Simple Bookmarking</li>
                    <li className="w-full border-solid border-[1.5px_0_1.5px_0] sm:border-b-[1.5px] sm:border-t-0 h-full py-2 hover:text-red-400">Speedy Searching</li>
                    <li className="w-full border-solid sm:border-b-[1.5px] border-b-[1.5px] sm:border-t-0 h-full py-2 hover:text-red-400">Easy Sharing</li>
                </ul>
                {/* tabs */}
                <div className="feature-content rounded-md flex flex-col md:flex-row justify-center items-center mt-4 px-4 md:px-8 py-6">
                    <img src={imgs.illustrationFeaturesTab1} alt="illustration-features-tab-1" />
                    <div className="flex flex-col justify-center items-center md:items-start gap-4 max-w-md text-center md:text-left md:px-11">
                        <h2 className="text-blue-950 text-sm mt-6">{featuresObj.title}</h2>
                        <p className="text-gray-400 text-xs">{featuresObj.description}</p>
                        <div className="hidden w-full md:flex justify-start items-center mt-3 mb-12">
                            <button className="bg-blue-600 text-white p-2 rounded-sm w-fit shadow-xl border-blue-600 hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600">{featuresObj.buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;