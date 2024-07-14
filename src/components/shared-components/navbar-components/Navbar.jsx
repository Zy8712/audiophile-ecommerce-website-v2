'use client'
import { Logo, NavOptions, CartToggle } from "@/utils/navbarItems";
import { Provider } from 'react-redux';
import store from '@/lib/store'

export default function Navbar() {
    return (
        <>
            <nav className="fixed z-50 w-full h-24 grid place-items-center bg-black rounded-b-xl px-6 sm:px-10 md:px-20 lg:px-[165px] transition-all duration-500 ease-in-out">
                <div className="w-full max-w-[1110px] h-full flex justify-between items-center border-theme-white-op-20 border-b-[0.5px] border-solid">
                    <button className="inline-block custom-lg:hidden">
                        <img src="/images/shared/tablet/icon-hamburger.svg" className={`w-6 h-5 ${0 ? 'custom-dark-orange-filter-selected' : 'custom-dark-orange-filter'}`} />
                    </button>

                    <Logo />

                    <NavOptions />

                    <Provider store={store}>
                        <CartToggle />
                    </Provider>

                </div>
            </nav>
        </>
    );
}