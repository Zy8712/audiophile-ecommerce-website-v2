import { Logo } from "@/utils/navbarItems";
import FooterNavOptions from "./FooterNavOptions";

export default function Footer() {

    return (
        <>
            <footer className="w-full h-[654px] custom-sm:h-[400px] lg:h-[365px] flex justify-center bg-black relative transition-all duration-500 ease-in-out">
                <div className="w-full mx-6 custom-sm:mx-10 md:mx-[165px] relative">

                    <div className="w-[101px] h-1 bg-theme-dark-orange absolute top-0"></div>

                    <div className="w-full flex flex-col custom-sm:inline-block lg:flex lg:flex-row justify-between items-center mt-[60px] md:mt-[75px] mb-12 custom-sm:mb-0 transition-all duration-500 ease-in-out">
                        <div className="mb-12 custom-sm:mb-8 lg:mb-0">
                            <Logo />
                        </div>

                        <FooterNavOptions />
                    </div>

                    <div className="w-full h-[100px] flex justify-between items-center mt-9 mb-20 custom-sm:mb-0">
                        <div className="w-full md:w-[540px] h-full transition-all duration-500 ease-in-out">
                            <p className="text-white opacity-50 font-medium text-[15px] leading-[25px] text-center custom-sm:text-left">
                                Audiophile is an all in one stop to fulfill your audio needs.
                                We're a small team of music lovers and sound specialists who are devoted to
                                helping you get the most out of personal audio.
                                Come and visit our demo facility - we&apos;re open 7 days a week.
                            </p>
                        </div>

                        <div className="h-full flex flex-col justify-end items-end absolute bottom-14 custom-sm:bottom-11 
                        right-1/2 transform translate-x-1/2 custom-sm:right-4 custom-sm:translate-x-0 lg:static transition-all duration-500 ease-in-out">
                            <div className="w-[104px] flex justify-between items-center">
                                <img src="/images/shared/desktop/icon-facebook.svg" className="w-6 custom-dark-orange-filter hover:cursor-pointer" />
                                <img src="/images/shared/desktop/icon-twitter.svg" className="w-6 custom-dark-orange-filter hover:cursor-pointer" />
                                <img src="/images/shared/desktop/icon-instagram.svg" className="w-6 custom-dark-orange-filter hover:cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-center custom-sm:justify-start mt-14">
                        <span className="text-white opacity-50 font-medium text-[15px] leading-[25px]">
                            Copyright 2021. All Rights Reserved
                        </span>
                    </div>


                </div>


                <div className="absolute bottom-2 text-white opacity-90 text-xs">
                    Original site design by
                    <a className="text-theme-light-orange"
                        href="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx"> Frontend Mentor</a>.
                    Coded by: <a className="text-theme-light-orange" href="https://github.com/Zy8712">Bryan Li</a>
                </div>
            </footer>
        </>
    );
}