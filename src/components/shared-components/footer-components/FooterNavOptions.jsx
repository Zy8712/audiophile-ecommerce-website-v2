'use client';

import { usePathname } from 'next/navigation';
import { navOptions } from "@/utils/navbarItems";

export default function FooterNavOptions() {

    const pathname = usePathname();

    const isActive = (path) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname && pathname.includes(path);
    };

    return (
        <>
            <div className="w-28 custom-sm:w-[429px] h-36 custom-sm:h-auto flex flex-col custom-sm:flex-row justify-between items-center">
                {navOptions.map((option, index) => (
                    <a href={option.path} key={index}>
                        <span className={`text-[13px] uppercase font-bold tracking-[2px] leading-[25px] hover:cursor-pointer 
                                        ${isActive(option.path) ? 'text-theme-dark-orange' : 'text-white hover:text-theme-dark-orange'}`}>
                            {option.pageName}
                        </span>
                    </a>
                ))}
            </div>
        </>
    );
}