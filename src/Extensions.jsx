import "./index.css";
import imgs from '../images/images.js';

const Extensions = () => {
    return (
        <>
            <h2 className="text-center text-blue-950">Download the extension</h2>
            <p className="text-center text-gray-500 text-xs">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
            <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
                <div className="p-4 rounded-md flex flex-col justify-center items-center">
                    <img src={imgs.chrome} alt="Chrome" />
                    <h3 className="text-blue-950 font-medium">Add to Chrome</h3>
                    <span className="text-gray-500 text-xs">Minimum version 62</span>
                    <button className="mt-4 bg-blue-600 text-white font-medium py-2 px-4 rounded-md">Add to Chrome</button>
                </div>
                <div className="p-4 rounded-md flex flex-col justify-center items-center ">
                    <img src={imgs.firefox} alt="Firefox" />
                    <h3 className="text-blue-950 font-medium">Add to Firefox</h3>
                    <span className="text-gray-500 text-xs">Minimum version 55</span>
                    <button className="mt-4 bg-blue-600 text-white font-medium py-2 px-4 rounded-md">Add to Firefox</button>
                </div>
                <div className="p-4 rounded-md flex flex-col justify-center items-center">
                    <img src={imgs.opera} alt="Opera" />
                    <h3 className="text-blue-950 font-medium">Add to Opera</h3>
                    <span className="text-gray-500 text-xs">Minimum version 46</span>
                    <button className="mt-4 bg-blue-600 text-white font-medium py-2 px-4 rounded-md">Add to Opera</button>
                </div>
            </div>
        </>
    )
}

export default Extensions