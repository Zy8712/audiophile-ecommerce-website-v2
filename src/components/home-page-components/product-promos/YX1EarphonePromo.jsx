import { BorderOnlyProductButton } from "@/utils/productButtons";

export default function YX1EarphonePromo() {
    return (
        <>
            <div className="w-full h-[424px] custom-sm:h-80 flex flex-col custom-sm:flex-row justify-between">
                <div className="w-full custom-sm:w-[339px] lg:w-[540px] h-[200px] custom-sm:h-full rounded-lg overflow-hidden">
                    <img src="/images/home/desktop/image-earphones-yx1.jpg" className="hidden lg:inline-block" />
                    <img src="/images/home/tablet/image-earphones-yx1.jpg" className="hidden custom-sm:inline-block lg:hidden" />
                    <img src="/images/home/mobile/image-earphones-yx1.jpg" className="inline-block custom-sm:hidden" />
                </div>
                <div className="w-full custom-sm:w-[339px] lg:w-[520px] h-[200px] custom-sm:h-full flex flex-col justify-center items-center rounded-lg bg-theme-light-grey">
                    <div className="w-full custom-sm:w-[247px] h-[118px] flex flex-col items-start ml-6 custom-sm:ml-0  custom-sm:mr-[61.5px]">
                        <p className="mb-6 text-black text-[28px] tracking-[2px] font-bold">YX1 EARPHONES</p>
                        <BorderOnlyProductButton pageLink="/earphones/yx1-earphones" />
                    </div>

                </div>
            </div>
        </>
    );
}