import "./index.css";
import imgs from '../images/images.js';

const Features = () => {
    return (
        <>
            <div className="py-6 px-2" id="features">
                <h2 className="text-blue-950 text-sm">Features</h2>
                <p className="text-gray-500">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                <ul className="text-gray-500 flex sm:flex-row flex-col justify-center items-center mt-4 joined">
                    <li className="border-solid border-b-0 sm:border-b-[1.5px] border-t-[1.5px] sm:border-t-0 border-[lightgray] py-2 px-6">Simple Bookmarking</li>
                    <li className="border-solid border-[1.5px_0_1.5px_0] sm:border-b-[1.5px] sm:border-t-0 border-[lightgray] py-2 px-6">Speedy Searching</li>
                    <li className="border-solid sm:border-b-[1.5px] border-b-[1.5px] sm:border-t-0 border-[lightgray] py-2 px-6">Easy Sharing</li>
                </ul>
                <div className="feature-content rounded-md flex flex-col justify-center items-center mt-4">
                    <img src={imgs.illustrationFeaturesTab1} alt="illustration-features-tab-1" />
                    <h2 className="text-blue-950 text-sm mt-6">Bookmark in one click</h2>
                    <p className="text-gray-500 text-xs">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                    <div className="hidden w-full md:flex justify-center items-center mt-3 mb-12">
                    <button className="bg-blue-600 text-white p-2 rounded-sm w-fit">More info</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Features;