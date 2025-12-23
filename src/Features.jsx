import "./index.css";
import imgs from '../images/images.js';

const Features = () => {
    return (
        <>
            <div className="py-6 px-2">
                <h2 className="text-blue-950 text-sm">Features</h2>
                <p className="text-gray-500">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                <ul className="text-gray-500">
                    <li>Simple Bookmarking</li>
                    <li>Speedy Searching</li>
                    <li>Easy Sharing</li>
                </ul>
                <div className="feature-content rounded-md flex flex-col justify-center items-center mt-4">
                    <img src={imgs.illustrationFeaturesTab1} alt="illustration-features-tab-1" />
                    <h2 className="text-blue-950 text-sm mt-6">Bookmark in one click</h2>
                    <p className="text-gray-500 text-xs">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                </div>
            </div>
        </>
    )
}

export default Features;