import React from 'react'
import "./index.css";
import imgs from '../images/images.js';

const App = () => {
    return (
        <div>
            <img src={imgs.illustrationHero} alt="" />
            <h1 className="text-3xl text-blue-950 font-medium">A Simple Bookmark Manager</h1>
            <p className="text-gray-500 font-normal">A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Get it on Chrome</button>
            <button className="bg-grey-50 text-white px-4 py-2 rounded-md"><span className='text-blue-950'>Get it on Firefox</span></button>
        </div>
    )
}

export default App
