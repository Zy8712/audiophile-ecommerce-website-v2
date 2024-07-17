
export default function CategoryPageHeader(props) {
    return (
        <>
            <div className="w-full h-[192px] sm:h-[336px] flex flex-col justify-end items-center bg-black rounded-b-xl transition-all duration-500 ease-in-out">
                <h1 className="text-white text-[28px] sm:text-[40px] font-bold uppercase leading-[32px] sm:leading-[44px] tracking-[1.43px] mb-10 sm:mb-[97px] transition-all duration-500 ease-in-out">
                    {props.children}
                </h1>
            </div>
        </>
    );
}