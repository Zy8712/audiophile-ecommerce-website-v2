
export default function HomeProductSectionLayout(props) {
    return (
        <>
            <div className="w-full h-full flex flex-col items-center pt-[120px] pb-[200px]">
                <div className="w-[95%] md:w-[95%] custom-md:w-[860px] lg:w-[980px] custom-lg:w-[1110px] h-[3013px] sm:h-[2866px] md:h-[2536px] border-blue-500 border-solid border-2 flex flex-col justify-between transition-all duration-500 ease-in-out">
                    {props.children}
                </div>
            </div>
        </>
    );
}