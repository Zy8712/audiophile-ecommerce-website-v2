import { Logo, NavOptions, CartToggle } from "@/utils/navbarItems";

export default function Navbar() {
    return (
        <>
            <nav className="fixed z-50 w-full h-24 grid place-items-center bg-black rounded-b-xl px-6 sm:px-10 md:px-20 lg:px-[165px] transition-all duration-500 ease-in-out">
                <div className="w-full max-w-[1110px] h-full flex justify-between items-center border-theme-white-op-20 border-b-[0.5px] border-solid">
                    <Logo />
                    <NavOptions />
                    <CartToggle />
                </div>
            </nav>
        </>
    );
}