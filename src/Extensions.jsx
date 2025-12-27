import "./index.css";
import imgs from '../images/images.js';

const Extensions = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-2 py-4 px-2">
                <h2 className=" text-blue-950">Download the extension</h2>
                <p className="text-gray-400 max-w-sm">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
                <div className="flex flex-col md:flex-row justify-between items-start gap-5 my-6">
                    <div className="py-4 rounded-lg flex flex-col justify-center items-center shadow-xl">
                        <img src={imgs.chrome} alt="Chrome" />
                        <h3 className="text-blue-950 text-xs mt-2">Add to Chrome</h3>
                        <span className="text-gray-500 py-2">Minimum version 62</span>
                        <img src={imgs.bgDots} alt="bg-dots" />
                        <button className="mt-4 bg-blue-600 text-white font-medium py-2 px-4 rounded-sm border-blue-600 hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600">Add & Install Extension</button>
                    </div>
                    <div className="py-4 md:mt-9 rounded-lg flex flex-col justify-center items-center shadow-xl">
                        <img src={imgs.firefox} alt="Firefox" />
                        <h3 className="text-blue-950 text-xs mt-2">Add to Firefox</h3>
                        <span className="text-gray-500 py-2">Minimum version 55</span>
                        <img src={imgs.bgDots} alt="bg-dots" />
                        <button className="mt-4 bg-blue-600 text-white font-medium py-2 px-4 rounded-sm border-blue-600 hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600">Add & Install Extension</button>
                    </div>
                    <div className="py-4 md:mt-18 rounded-lg flex flex-col justify-center items-center shadow-xl">
                        <img src={imgs.opera} alt="Opera" />
                        <h3 className="text-blue-950 text-xs mt-2">Add to Opera</h3>
                        <span className="text-gray-500 py-2">Minimum version 46</span>
                        <img src={imgs.bgDots} alt="bg-dots" />
                        <button className="mt-4 bg-blue-600 text-white font-medium py-2 px-4 rounded-sm  border-blue-600 hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600">Add & Install Extension</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Extensions