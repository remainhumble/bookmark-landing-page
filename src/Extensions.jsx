import "./index.css";
import imgs from '../images/images.js';

const Extensions = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 p-2">
                <h2 className=" text-blue-950 text-sm">Download the extension</h2>
                <p className=" text-gray-500">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
                <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
                    <div className="p-4 rounded-md flex flex-col justify-center items-center">
                        <img src={imgs.chrome} alt="Chrome" />
                        <h3 className="text-blue-950 text-xs">Add  Install Extension</h3>
                        <span className="text-gray-500">Minimum version 62</span>
                        <button className="mt-4 bg-blue-600 text-white font-medium py-2 px-4 rounded-md">Add & Install Extension</button>
                    </div>
                    <div className="p-4 rounded-md flex flex-col justify-center items-center ">
                        <img src={imgs.firefox} alt="Firefox" />
                        <h3 className="text-blue-950 text-xs">Add to Firefox</h3>
                        <span className="text-gray-500">Minimum version 55</span>
                        <button className="mt-4 bg-blue-600 text-white font-medium py-2 px-4 rounded-md">Add & Install Extension</button>
                    </div>
                    <div className="p-4 rounded-md flex flex-col justify-center items-center">
                        <img src={imgs.opera} alt="Opera" />
                        <h3 className="text-blue-950 text-xs">Add to Opera</h3>
                        <span className="text-gray-500">Minimum version 46</span>
                        <button className="mt-4 bg-blue-600 text-white font-medium py-2 px-4 rounded-md">Add & Install Extension</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Extensions