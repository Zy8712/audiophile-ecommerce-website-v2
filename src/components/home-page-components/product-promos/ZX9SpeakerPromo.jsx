import { BlackProductButton } from "@/utils/productButtons";

export default function ZX9SpeakerPromo() {
    return (
        <>
            <div className="w-full h-[600px] custom-sm:h-[720px] md:h-[560px] flex flex-col md:flex-row bg-theme-dark-orange bg-[url('/images/home/desktop/pattern-circles.svg')] bg-no-repeat bg-[left_50%_top_120%] md:bg-[left_-140px_top_-40px] rounded-lg">
                
                <div className="w-full md:w-1/2 h-2/5 md:h-full overflow-hidden relative flex justify-center items-center md:inline-block">
                    <img src="/images/home/desktop/image-speaker-zx9.png" className="w-36 custom-sm:w-44 md:w-96 absolute md:-bottom-4 md:right-6 mt-4" />
                </div>

                <div className="w-full md:w-1/2 h-3/5 md:h-full flex flex-col justify-center items-center text-center md:text-left">
                    <div className="w-[349px] h-[303px] flex flex-col items-center md:items-start">
                        <span className="block h-[116px] text-white text-4xl custom-sm:text-[56px] tracking-[2px] leading-[58px] font-bold">
                            ZX9 SPEAKER
                        </span>
                        <p className="text-white text-[15px] opacity-75 leading-[25px] mt-6 mb-10">
                            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                        </p>
                        
                        <BlackProductButton pageLink="/speakers/zx9-speaker" />
                    </div>
                </div>
                
            </div>
        </>
    );
}