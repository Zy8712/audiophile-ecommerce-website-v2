
export default function ProductCategoryPageLayout(props) {
    return (
        <>
            <div className="w-full flex justify-center items-center pt-[120px] pb-[196px] border-blue-500 border-2 border-solid">
                <div className="w-[95%] lg:w-[1110px] h-[3947px] sm:h-[3378px] lg:h-[3192px] flex flex-col justify-between border-red-500 border-2 border-solid">
                    {props.children}
                </div>
            </div>
        </>
    );
}