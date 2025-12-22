import "./index.css";
import imgs from '../images/images.js';

const Features = () => {
    return (
        <>
            <h2 className="text-blue-950 font-medium">Features</h2>
            <p className="text-xs text-gray-500">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            <ul className="text-xs text-gray-500">
                <li>Simple Bookmarking</li>
                <li>Speedy Searching</li>
                <li>Easy Sharing</li>
            </ul>
            <div className="feature-content p-4 rounded-md flex flex-col justify-center items-center">
                <img src={imgs.illustrationFeaturesTab1} alt="illustration-features-tab-1" />
                <h3 className="text-blue-950 font-medium">Bookmark in one click</h3>
                <p className="text-gray-500 text-xs">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
            </div>
        </>
    )
}

export default Features;