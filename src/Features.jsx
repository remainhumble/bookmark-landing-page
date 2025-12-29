import React, { useState } from "react";
import "./index.css";
import featuresObj from "./FeaturesObject";

const Features = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    return (
        <>
            <div className="my-21 px-4" id="features">
                <div className=" md:px-54">
                    <h2 className="text-blue-950">Features</h2>
                    <p className="text-gray-400 py-3">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                </div>
                <ul className="text-gray-500 flex sm:flex-row flex-col justify-center items-center mt-4 joined max-w-md mx-auto">
                    {featuresObj.map((feature, index) => (
                        <li
                            key={index}
                            role="tab"
                            tabIndex={activeTab === index ? 0 : -1}
                            aria-selected={activeTab === index}
                            className={`w-full border-solid border-b-gray-400 border-b-[.5px] border-t-[.5px] sm:border-t-0 h-full py-2 hover:text-red-400 ${activeTab === index ? "text-blue-950 border-b-red-400 border-b-[4.5px]" : ""}`}
                            onClick={() => handleTabClick(index)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    handleTabClick(index);
                                }
                            }}
                        >
                            {feature.tabTitle}
                        </li>

                    ))}
                </ul>
                {/* tabs */}
                {<div className="feature-content rounded-md flex flex-col md:flex-row justify-center items-center mt-4 lg:px-18 md:px-8 ">
                    <div className="feature-blob"></div>
                    <img src={featuresObj[activeTab].image} alt={featuresObj[activeTab].alt} className="w-52 my-6 sm:my-0" />
                    <div className="flex flex-col justify-center items-center md:items-start gap-4 max-w-md text-center md:text-left md:px-11">
                        <h2 className="text-blue-950 text-sm mt-6">{featuresObj[activeTab].title}</h2>
                        <p className="text-gray-400 text-xs">{featuresObj[activeTab].description}</p>
                        <div className="hidden w-full md:flex justify-start items-center mt-3 mb-12">
                            <button className="bg-blue-600 text-white p-2 rounded-sm w-fit shadow-xl border-blue-600 hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600">{featuresObj[activeTab].buttonText}</button>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default Features;