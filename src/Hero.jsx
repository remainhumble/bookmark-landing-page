import "./index.css";
import imgs from '../images/images.js';

const App = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 p-2">
                <img src={imgs.illustrationHero} alt="illustration-hero" />
                <h1 className="text-blue-950">A Simple Bookmark Manager</h1>
                <p className="text-gray-500">A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className="flex flex-row justify-center gap-2 mt-8">
                    <button className="bg-blue-600 text-white p-2 rounded-md">Get it on Chrome</button>
                    <button className="bg-grey-50 text-blue-950 p-2 rounded-md">Get it on Firefox</button>
                </div>
            </div>
        </>
    )
}

export default App;