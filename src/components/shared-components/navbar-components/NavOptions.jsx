'use client';
import { usePathname } from 'next/navigation';
import { navOptions } from "@/utils/navbarItems";

export default function NavOptions() {
    const pathname = usePathname();

    const isActive = (path) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname && pathname.includes(path);
    };

    return (
        <div className="mr-16 w-[429px] hidden custom-lg:flex justify-between items-center">
            {navOptions.map((option, index) => (
                <a href={option.path} key={index} className={`text-[13px] uppercase font-bold tracking-[2px] leading-[25px] hover:cursor-pointer 
                    ${isActive(option.path) ? 'text-theme-dark-orange' : 'text-white hover:text-theme-dark-orange'}`}>
                    {option.pageName}
                </a>
            ))}
        </div>
    );
}
