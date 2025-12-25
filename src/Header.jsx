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
                        <a href="#features" class="text-[16px] text-gray-500">Features</a>
                        <a href="#" class="text-[16px] text-gray-500">Pricing</a>
                        <a href="#contact" class="text-[16px] text-gray-500">Contact</a>
                        {/* <!-- login --> */}
                        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                            <button href="#" class="bg-red-400 px-4 py-1 uppercase rounded-sm text-white">Login</button>
                        </div>
                    </el-popover-group>
                </nav>
                <el-dialog>
                    <dialog id="mobile-menu" class="backdrop:bg-transparent lg:hidden">
                        <div tabindex="0" class="fixed inset-0 focus:outline-none">
                            <el-dialog-panel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                <div class="flex items-center justify-between">
                                    <a href="#" class="-m-1.5 p-1.5">
                                        <span class="sr-only">Your Company</span>
                                        <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" class="h-8 w-auto" />
                                    </a>
                                    <button type="button" command="close" commandfor="mobile-menu" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                                        <span class="sr-only">Close menu</span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
                                            <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="mt-6 flow-root">

                                    <div class="">
                                        <a href="#" class="-mx-3 block text-xs text-gray-500 hover:bg-gray-50">Features</a>
                                        <a href="#" class="-mx-3 block text-xs text-gray-500 hover:bg-gray-50">Pricing</a>
                                        <a href="#" class="-mx-3 block text-xs text-gray-500 hover:bg-gray-50">Contact</a>
                                    </div>
                                    <div class="py-6">
                                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-xs text-gray-500 hover:bg-gray-50">Login</a>
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