import { BorderOnlyProductButton } from "@/utils/productButtons";

export default function ZX7SpeakerPromo() {
    return (
        <>
            <div className="max-w-full h-80 flex flex-col justify-center rounded-lg bg-[url('/images/home/mobile/image-speaker-zx7.jpg')] custom-sm:bg-[url('/images/home/tablet/image-speaker-zx7.jpg')] md:bg-[url('/images/home/desktop/image-speaker-zx7.jpg')]">
                <div className="w-[204px] h-[118px] flex flex-col items-start ml-6 custom-sm:ml-[95px]">
                    <p className="mb-6 text-black text-[28px] tracking-[2px] font-bold">ZX7 SPEAKER</p>
                    <BorderOnlyProductButton pageLink="/speakers/zx7-speaker" />
                </div>
            </div>

        </>
    );
}