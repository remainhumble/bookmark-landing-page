import "./index.css";
import imgs from '../images/images.js';

const FAQs = () => {
    return (
        <>
            <div className="flex flex-col gap-4 py-6 px-4 text-left max-w-73 mx-auto">
                <div className="topheading text-center">
                    <h2 className="text-blue-950">Frequently Asked Questions</h2>
                    <p className="text-gray-500 my-2">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
                </div>
                <div className="faqs max-w-sm mx-auto w-full flex flex-col my-2">
                    <details className="faq border-b-2 border-t-2 border-b-solid border-t-solid border-b-gray-200 border-t-gray-200 gap-4 py-2">
                        <summary className="flex justify-between"><h4 className="text-blue-950 text-xs hover:text-red-400">What is Bookmark?</h4><img src={imgs.iconArrow} alt="arrow" className="arrow-icon" /></summary>
                        <div className="answer my-4">
                            <p className="text-gray-500 text-xs/5">
                                A saved shortcut that directs your web browser to a specific webpage. It stores essential information such as the title, URL, and favicon of the page, allowing users to easily access their favorite websites without needing to remember or retype the web address. Bookmarks are a key feature in web browsers, enabling users to organize and revisit specific sites quickly.
                            </p>

                        </div>
                    </details>

                    <details className="faq border-b-2 border-b-solid border-b-gray-200 py-2">
                        <summary className="flex justify-between"><h4 className="text-blue-950 text-xs hover:text-red-400">How can I request a new browser?</h4><img src={imgs.iconArrow} alt="arrow" className="arrow-icon" /></summary>
                        <div className="answer my-4">
                            <p className="text-gray-500 text-xs/5">
                                To request a new browser, follow these steps:
                            </p>
                            <ul className="text-gray-500 text-xs/5 py-2">
                                <li className="text-gray-500 text-xs/5"><b>Download the New Browser:</b> Visit the official website of the browser you want to install, such as Google Chrome, Mozilla Firefox, or Microsoft Edge. Click the download button and follow the installation instructions.</li>
                                <li className="text-gray-500 text-xs/5"><b>Install the Browser:</b> Run the downloaded file and follow the prompts to complete the installation. For example, on Windows, you can install Chrome by clicking the download button and following the installation wizard.</li>
                                <li className="text-gray-500 text-xs/5"><b>Set as Default Browser:</b> After installation, open your device's settings (Windows, Mac, or mobile) and navigate to the default applications section. Select the new browser you installed and set it as your default.</li>
                                <li className="text-gray-500 text-xs/5"><b>Make Default in Browser Settings:</b> If you want to set the new browser as the default within the browser itself, open the browser, go to settings, and look for the option to set it as the default.</li>
                            </ul>
                            <p className="text-gray-500 text-xs/5">By following these steps, you can successfully install and set a new browser on your device.</p>
                        </div>
                    </details>

                    <details className="faq border-b-2 border-b-solid border-b-gray-200 py-2">
                        <summary className="flex justify-between"><h4 className="text-blue-950 text-xs hover:text-red-400">Is there a mobile app
                        </h4><img src={imgs.iconArrow} alt="arrow" className="arrow-icon" /></summary>
                        <div className="answer my-4">
                            <p className="text-gray-500 text-xs/5">
                                Yes, we have a mobile app available for both iOS and Android devices. You can download it from the Apple App Store or Google Play Store by searching for "Bookmark App."
                            </p>
                        </div>
                    </details>

                    <details className="faq border-b-2 border-b-solid border-b-gray-200 py-2">
                        <summary className="flex justify-between"><h4 className="text-blue-950 text-xs hover:text-red-400">
                            What about other Chromium browsers?
                        </h4><img src={imgs.iconArrow} alt="arrow" className="arrow-icon" /></summary>
                        <div className="answer my-4">
                            <p className="text-gray-500 text-xs/5">
                                Other Chromium-based browsers such as Microsoft Edge and Brave, offer similar features to Google Chrome, including fast performance, a wide range of extensions, and regular updates. They also provide enhanced privacy options and unique functionalities tailored to different user preferences.
                            </p>
                        </div>
                    </details>
                </div>
                <div className="w-full flex justify-center items-center mt-3 mb-12">
                    <button className="bg-blue-600 text-white p-2 rounded-sm w-fit border-blue-600 hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600">More info</button>
                </div>
            </div>
        </>
    )
}

export default FAQs;