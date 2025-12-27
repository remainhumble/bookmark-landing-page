import "./index.css";
import imgs from '../images/images.js';

const Header = () => {
    return (
        <>
            <header class="bg-white">
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-16">
                    <div class="flex lg:flex-1">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Bookmark</span>
                            <img src={imgs.blackBookmark} alt="bookmark-logo" class="w-18 md:w-26" />
                        </a>
                    </div>
                    <div class="flex lg:hidden">
                        <button type="button" command="show-modal" commandfor="mobile-menu" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <span class="sr-only">Open main menu</span>
                            <img src={imgs.iconHamburger} alt="menu" />
                        </button>
                    </div>
                    <el-popover-group class="hidden lg:flex lg:justify-end lg:gap-x-9 uppercase items-center">
                        <a href="#features" class="text-[16px] text-blue-950 hover:text-red-400">Features</a>
                        <a href="#" class="text-[16px] text-blue-950 hover:text-red-400">Pricing</a>
                        <a href="#contact" class="text-[16px] text-blue-950 hover:text-red-400">Contact</a>
                        {/* <!-- login --> */}
                        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                            <button href="#" class="bg-red-400 px-4 py-1 uppercase rounded-sm text-white hover:bg-white hover:text-red-400 border-2 hover:border-solid-red-400">Login</button>
                        </div>
                    </el-popover-group>
                </nav>
                <el-dialog>
                    <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
                        <div tabindex="0" className="fixed inset-0 focus:outline-none">
                            <el-dialog-panel className="bg-blue-950 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                <div className="flex items-center justify-between">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Your Company</span>
                                        <img src={imgs.whiteBookmark} alt="bookmark-logo" className="w-24 md:w-26" />
                                    </a>
                                    <button type="button" command="close" commandfor="mobile-menu" className="rounded-md text-gray-700">
                                        <span className="sr-only">Close menu</span>
                                        <img src={imgs.iconClose} alt="close" className="close w-3" />
                                    </button>
                                </div>
                                <div className="mt-6 flow-root">
                                    <ul className="flex sm:flex-row flex-col justify-center items-center mt-4 joined max-w-md mx-auto">
                                        <li className="text-xs text-gray-500 w-full border-solid border-b-0 sm:border-b-[1.5px] border-t-[1.5px] sm:border-t-0 border-[lightgray] h-full py-2 hover:bg-gray-50"><a href="#features">Features</a></li>
                                        <li className="text-xs text-gray-500 w-full border-solid border-[1.5px_0_1.5px_0] sm:border-b-[1.5px] sm:border-t-0 border-[lightgray] h-full py-2 hover:bg-gray-50"><a href="#">Pricing</a></li>
                                        <li className="text-xs text-gray-500 w-full border-solid sm:border-b-[1.5px] border-b-[1.5px] sm:border-t-0 border-[lightgray] h-full py-2 hover:bg-gray-50"><a href="#contact">Contact</a></li>
                                    </ul>

                                    <div className="footer-social flex flex-row justify-center w-full gap-4 p-4 sm:py-1 fixed bottom-0 left-0">
                                        <a href="https://facebook.com" target="_blank"><img src={imgs.iconFacebook} alt="facebook" /></a>
                                        <a href="https://x.com" target="_blank"><img src={imgs.iconTwitter} alt="twitter" /></a>
                                    </div>

                                </div>
                            </el-dialog-panel>
                        </div>
                    </dialog>
                </el-dialog>
            </header>
        </>
    )
}

export default Header;