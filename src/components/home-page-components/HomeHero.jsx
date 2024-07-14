import { OrangeProductButton } from "@/utils/productButtons";

export default function HomeHero() {
    return (
        <>
            <div className="w-full h-[628px] sm:h-[729px] flex flex-col justify-end items-center bg-black px-0 sm:px-10 md:px-20 lg:px-[165px] rounded-b-xl transition-all duration-500 ease-in-out">
                
                <div className="w-full max-w-[1110px] h-[528px] sm:h-[633px] flex justify-center custom-lg:justify-between items-center transition-all duration-500 ease-in-out">

                    <div className="w-[396px] flex flex-col items-center custom-lg:items-start text-center custom-lg:text-left absolute z-30 custom-lg:static">
                        <span className="text-white opacity-[49.64%] text-sm tracking-[10px] uppercase bg-transparent">
                            New Product
                        </span>
                        <h1 className="text-white font-bold text-4xl custom-sm:text-[56px] leading-[58px] tracking-[2px] uppercase my-6 transition-all duration-500 ease-in-out">
                            XX99 Mark II Headphones
                        </h1>
                        <p className="w-[349px] text-white opacity-75 font-medium text-[15px] leading-[25px] mb-[30px]">
                            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                        </p>
                        
                        <OrangeProductButton pageLink="/headphones/xx99markii-headphones" />
                    </div>

                    <div className="block custom-lg:inline-block">
                        <img src="/images/home/desktop/figma_download_hero_bitmap_copy3_edit1_ai-upscale400.jpg" className="max-h-[525px] rounded-full border-none opacity-70 bg-blend-hard-light -z-10" />
                    </div>
                </div>

            </div>
        </>
    );
}